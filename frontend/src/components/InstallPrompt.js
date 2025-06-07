import React, { useState, useEffect } from 'react';

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
  };

  if (!showInstallPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-blue-500 text-white rounded-lg shadow-lg p-4 z-50">
      <div className="flex items-start space-x-3">
        <div className="text-2xl">📱</div>
        <div className="flex-1">
          <h3 className="font-semibold mb-1">Install App</h3>
          <p className="text-sm opacity-90 mb-3">
            Install this app for a better offline experience!
          </p>
          <div className="flex space-x-2">
            <button
              onClick={handleInstallClick}
              className="bg-white text-blue-500 px-3 py-1 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Install
            </button>
            <button
              onClick={handleDismiss}
              className="bg-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
            >
              Not Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;