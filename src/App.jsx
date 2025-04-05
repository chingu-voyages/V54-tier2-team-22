import { Routes, Route } from 'react-router-dom';
import Signup from './views/Sign-up';
import Signin from './views/Sign-in';
import { Home } from './views/Home';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import { GeminiResultProvider } from './context/GeminiResultProvider';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthProvider';
import ProtectedRoute from './views/ProtectedRoute';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <GeminiResultProvider>
          <Header />
          <Routes>
            {/* <Route path="/home" element={<Landing />} /> */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
          <Footer />
        </GeminiResultProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
