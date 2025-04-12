export const DownloadIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor" // Inherit parent color
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-[24px] h-[24px] `}
  >
    <path d="M12 15V3" /> {/* Arrow shaft */}
    <path d="M8 11l4 4 4-4" /> {/* Arrowhead */}
    <path d="M4 19h16" /> {/* Tray */}
  </svg>
);
