import { Routes, Route } from 'react-router-dom';
import Signup from './views/Sign-up';
import Signin from './views/Sign-in';
import { Home } from './views/Home';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import { GeminiResultProvider } from './context/GeminiResultProvider';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <GeminiResultProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <Footer />
      </GeminiResultProvider>
    </ThemeProvider>
  );
}

export default App;
