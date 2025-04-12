import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { renderToString } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const downloadAsPDF = (prompt, result) => {
  const doc = new jsPDF();
  const pageHeight = doc.internal.pageSize.getHeight(); // ~297mm for A4
  const marginBottom = 20; // Leave some room at the bottom

  // Render Prompt
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Prompt:', 10, 10);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  const promptLines = doc.splitTextToSize(prompt, 180);
  doc.text(promptLines, 10, 20);
  let y = 20 + promptLines.length * 7 + 10;

  // Render Result
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Result:', 10, y);
  y += 10;

  // Parse markdown to HTML
  const markdownString = renderToString(
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{result}</ReactMarkdown>
  );
  const parser = new DOMParser();
  const docHtml = parser.parseFromString(markdownString, 'text/html');
  const contentNodes = [];

  const walkNodes = (node) => {
    if (node.nodeType === 3) { // Text node
      const text = node.textContent.trim();
      if (text) contentNodes.push({ type: 'text', text, bold: node.parentNode.tagName === 'STRONG' || node.parentNode.tagName === 'B' });
    } else if (node.nodeType === 1) { // Element node
      if (node.tagName === 'LI') {
        contentNodes.push({ type: 'text', text: '• ' + node.textContent.trim(), bold: false });
      } else if (node.tagName === 'TABLE') {
        const rows = [];
        node.querySelectorAll('tr').forEach((tr) => {
          const row = [];
          tr.querySelectorAll('th, td').forEach((cell) => row.push(cell.textContent.trim()));
          rows.push(row);
        });
        contentNodes.push({ type: 'table', rows });
      } else {
        node.childNodes.forEach(walkNodes);
      }
    }
  };
  docHtml.body.childNodes.forEach(walkNodes);

  // Render content to PDF with pagination
  contentNodes.forEach((node) => {
    if (node.type === 'text') {
      doc.setFontSize(12);
      doc.setFont('helvetica', node.bold ? 'bold' : 'normal');
      const lines = doc.splitTextToSize(node.text, 180);
      const textHeight = lines.length * 7;

      if (y + textHeight > pageHeight - marginBottom) { // Check if text fits
        doc.addPage();
        y = 10; // Reset Y for new page
      }

      doc.text(lines, 10, y);
      y += textHeight;
    } else if (node.type === 'table') {
      autoTable(doc, {
        startY: y,
        head: [node.rows[0]],
        body: node.rows.slice(1),
        theme: 'striped',
        styles: { fontSize: 12, cellPadding: 2 },
        headStyles: { fillColor: [200, 200, 200] },
        didDrawPage: (data) => { // Update Y after table
          y = data.cursor.y + 10;
        },
      });
      // autoTable auto-paginates, so y is updated via didDrawPage
    }
  });

  doc.save('gemini-response.pdf');
};