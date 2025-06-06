import { useState, useEffect } from 'react';

const useServiceWorker = () => {
  const [isServiceWorkerReady, setIsServiceWorkerReady] = useState(false);
  const [isServiceWorkerUpdated, setIsServiceWorkerUpdated] = useState(false);
  const [cacheSize, setCacheSize] = useState(0);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      registerServiceWorker();
    }
  }, []);

  const registerServiceWorker = async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });

      console.log('Service Worker registered successfully:', registration);

      // Check for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              console.log('New service worker available');
              setIsServiceWorkerUpdated(true);
            }
          });
        }
      });

      // Service worker is ready
      if (registration.active) {
        setIsServiceWorkerReady(true);
        updateCacheSize();
      }

      // Listen for messages from service worker
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.cacheSize) {
          setCacheSize(event.data.cacheSize);
        }
      });

    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  };

  const updateServiceWorker = () => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
      window.location.reload();
    }
  };

  const updateCacheSize = () => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      const messageChannel = new MessageChannel();
      
      messageChannel.port1.onmessage = (event) => {
        if (event.data && event.data.cacheSize) {
          setCacheSize(event.data.cacheSize);
        }
      };

      navigator.serviceWorker.controller.postMessage(
        { type: 'GET_CACHE_SIZE' },
        [messageChannel.port2]
      );
    }
  };

  const clearCache = () => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      const messageChannel = new MessageChannel();
      
      messageChannel.port1.onmessage = (event) => {
        if (event.data && event.data.success) {
          setCacheSize(0);
          console.log('Cache cleared successfully');
        }
      };

      navigator.serviceWorker.controller.postMessage(
        { type: 'CLEAR_CACHE' },
        [messageChannel.port2]
      );
    }
  };

  const formatCacheSize = (bytes) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return {
    isServiceWorkerReady,
    isServiceWorkerUpdated,
    cacheSize: formatCacheSize(cacheSize),
    updateServiceWorker,
    updateCacheSize,
    clearCache
  };
};

export default useServiceWorker;