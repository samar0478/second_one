import React, { useState, useEffect } from 'react';

const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOfflineMessage, setShowOfflineMessage] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineMessage(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineMessage(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Show offline message if starting offline
    if (!navigator.onLine) {
      setShowOfflineMessage(true);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!showOfflineMessage && isOnline) return null;

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isOnline ? 'bg-green-500' : 'bg-orange-500'
    } text-white px-4 py-2 text-center text-sm font-medium`}>
      {isOnline ? (
        <div className="flex items-center justify-center space-x-2">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          <span>Back online! 🎉</span>
        </div>
      ) : (
        <div className="flex items-center justify-center space-x-2">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          <span>You're offline - App works without internet! 📱</span>
        </div>
      )}
    </div>
  );
};

export default OfflineIndicator;