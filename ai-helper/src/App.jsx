import './App.css';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main className="flex-1">
        <h1 className="dark:text-Neutral-100 text-Neutral-900 font-bold text-[64px] max-sm:text-[40px] tracking-[-1px] leading-[100%] max-w-[510px] max-sm:max-w-[343px] text-center">
          Get High-Quality AI Answers
        </h1>
      </main>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
