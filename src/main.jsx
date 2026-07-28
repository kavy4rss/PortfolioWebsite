import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Loader, { SESSION_KEY } from './components/layout/Loader';

function Root() {
  const alreadyShown = sessionStorage.getItem(SESSION_KEY);
  const [showLoader, setShowLoader] = useState(!alreadyShown);
  const [appVisible, setAppVisible] = useState(!!alreadyShown);

  const handleLoaderComplete = () => {
    setShowLoader(false);
    setAppVisible(true);
  };

  return (
    <>
      {showLoader && <Loader onComplete={handleLoaderComplete} />}
      <div
        style={{
          opacity: appVisible ? 1 : 0,
          transition: 'opacity 0.5s ease',
          pointerEvents: appVisible ? 'all' : 'none',
        }}
      >
        <App />
      </div>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </StrictMode>
);
