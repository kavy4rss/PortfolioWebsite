import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';


import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PageTransition from './components/layout/PageTransition';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';

import { useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import BackgroundGrid from './components/ui/BackgroundGrid';
import { preloadImages } from './utils/imagePreloader';
import profilePhoto from './media/Kavy/IMG_9062.JPG';
import sgmicLogo from './media/Client/Sgmic.jpg';

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition>
                <Projects />
              </PageTransition>
            }
          />
          <Route
            path="/projects/:slug"
            element={
              <PageTransition>
                <ProjectDetail />
              </PageTransition>
            }
          />
          <Route
            path="/clients"
            element={
              <PageTransition>
                <Clients />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <PageTransition>
                <PrivacyPolicy />
              </PageTransition>
            }
          />
          <Route
            path="/terms-of-service"
            element={
              <PageTransition>
                <TermsOfService />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  useLenis(); // Initialize smooth scroll

  useEffect(() => {
    // Preload key images in the background during idle time
    preloadImages([profilePhoto, sgmicLogo]);
  }, []);

  return (
    <HelmetProvider>
      <div className="noise-overlay min-h-screen relative" style={{ background: '#0B0C10' }}>
        <BackgroundGrid />
        <div className="relative z-10">
          <AppRoutes />
        </div>
      </div>
    </HelmetProvider>
  );
}
