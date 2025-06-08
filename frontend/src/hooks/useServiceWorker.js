import { useState, useEffect } from 'react';

const useServiceWorker = () => {
  const [isServiceWorkerReady, setIsServiceWorkerReady] = useState(false);
  const [isServiceWorkerUpdated, setIsServiceWorkerUpdated] = useState(false);
  const [cacheSize, setCacheSize] = useState('Calculating...');

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          setIsServiceWorkerReady(true);
          
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                setIsServiceWorkerUpdated(true);
              }
            });
          });
        })
        .catch((error) => {
          console.error('ServiceWorker registration failed:', error);
        });
    }

    // Initial cache size calculation
    updateCacheSize();
  }, []);

  const updateServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration().then((registration) => {
        if (registration && registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
          window.location.reload();
        }
      });
    }
  };

  const updateCacheSize = async () => {
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys();
        let totalSize = 0;
        
        for (const cacheName of cacheNames) {
          const cache = await caches.open(cacheName);
          const requests = await cache.keys();
          totalSize += requests.length;
        }
        
        setCacheSize(`${totalSize} items cached`);
      } catch (error) {
        setCacheSize('Unable to calculate');
      }
    } else {
      setCacheSize('Cache not supported');
    }
  };

  const clearCache = async () => {
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map(cacheName => caches.delete(cacheName)));
        setCacheSize('0 items cached');
      } catch (error) {
        console.error('Failed to clear cache:', error);
      }
    }
  };

  return {
    isServiceWorkerReady,
    isServiceWorkerUpdated,
    cacheSize,
    updateServiceWorker,
    updateCacheSize,
    clearCache
  };
};

export default useServiceWorker;