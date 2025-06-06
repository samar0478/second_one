const CACHE_NAME = 'coding-guide-v1.0.0';
const STATIC_CACHE_NAME = 'coding-guide-static-v1.0.0';
const DYNAMIC_CACHE_NAME = 'coding-guide-dynamic-v1.0.0';

// Assets to cache immediately when SW installs
const STATIC_ASSETS = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Mukti:wght@400;700&display=swap',
  'https://images.pexels.com/photos/7869041/pexels-photo-7869041.jpeg'
];

// Routes to cache with network-first strategy
const DYNAMIC_ROUTES = [
  '/api/*'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching static assets...');
        return cache.addAll(STATIC_ASSETS.map(url => new Request(url, { cache: 'reload' })));
      })
      .catch((error) => {
        console.error('Service Worker: Error caching static assets:', error);
        // Don't fail installation if some assets fail to cache
        return Promise.resolve();
      })
  );
  
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  // Take control of all clients immediately
  self.clients.claim();
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension and other non-http(s) requests
  if (!request.url.startsWith('http')) {
    return;
  }
  
  // Handle different types of requests
  if (isStaticAsset(request.url)) {
    // Cache First Strategy for static assets
    event.respondWith(cacheFirstStrategy(request, STATIC_CACHE_NAME));
  } else if (isAPIRequest(request.url)) {
    // Network First Strategy for API requests
    event.respondWith(networkFirstStrategy(request, DYNAMIC_CACHE_NAME));
  } else {
    // Stale While Revalidate for HTML and other resources
    event.respondWith(staleWhileRevalidateStrategy(request, DYNAMIC_CACHE_NAME));
  }
});

// Cache First Strategy - good for static assets that don't change often
function cacheFirstStrategy(request, cacheName) {
  return caches.open(cacheName)
    .then((cache) => {
      return cache.match(request)
        .then((response) => {
          if (response) {
            // Found in cache, return it
            return response;
          }
          
          // Not in cache, fetch from network
          return fetch(request)
            .then((networkResponse) => {
              // Cache the response for future use
              cache.put(request, networkResponse.clone());
              return networkResponse;
            })
            .catch(() => {
              // Network failed, return offline fallback if available
              return getOfflineFallback(request);
            });
        });
    });
}

// Network First Strategy - good for dynamic content and API requests
function networkFirstStrategy(request, cacheName) {
  return fetch(request)
    .then((networkResponse) => {
      // Network request successful
      if (networkResponse.status === 200) {
        // Cache the response
        caches.open(cacheName)
          .then((cache) => {
            cache.put(request, networkResponse.clone());
          });
      }
      return networkResponse;
    })
    .catch(() => {
      // Network failed, try to get from cache
      return caches.open(cacheName)
        .then((cache) => {
          return cache.match(request)
            .then((cachedResponse) => {
              if (cachedResponse) {
                return cachedResponse;
              }
              // No cached version available
              return getOfflineFallback(request);
            });
        });
    });
}

// Stale While Revalidate Strategy - good for frequently updated content
function staleWhileRevalidateStrategy(request, cacheName) {
  return caches.open(cacheName)
    .then((cache) => {
      return cache.match(request)
        .then((cachedResponse) => {
          // Always try to fetch from network in the background
          const networkFetch = fetch(request)
            .then((networkResponse) => {
              if (networkResponse.status === 200) {
                cache.put(request, networkResponse.clone());
              }
              return networkResponse;
            })
            .catch(() => {
              // Network failed, but we might have a cached version
              return cachedResponse;
            });
          
          // Return cached version immediately if available, otherwise wait for network
          return cachedResponse || networkFetch;
        });
    });
}

// Helper functions
function isStaticAsset(url) {
  return url.includes('/static/') || 
         url.includes('.js') || 
         url.includes('.css') || 
         url.includes('.png') || 
         url.includes('.jpg') || 
         url.includes('.jpeg') || 
         url.includes('.svg') || 
         url.includes('.ico') ||
         url.includes('fonts.googleapis.com') ||
         url.includes('images.pexels.com');
}

function isAPIRequest(url) {
  return url.includes('/api/');
}

function getOfflineFallback(request) {
  const url = new URL(request.url);
  
  if (request.destination === 'document') {
    // Return cached index.html for navigation requests
    return caches.match('/');
  }
  
  if (request.destination === 'image') {
    // Return a placeholder image or cached image
    return new Response('', { status: 200, statusText: 'OK' });
  }
  
  // For other requests, return a generic offline response
  return new Response(
    JSON.stringify({ 
      error: 'Offline', 
      message: 'This content is not available offline' 
    }),
    {
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'application/json' }
    }
  );
}

// Background sync for when connection is restored
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync triggered');
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Perform any background tasks when connection is restored
      console.log('Service Worker: Performing background sync tasks')
    );
  }
});

// Push notification handler (for future use)
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push message received');
  
  const options = {
    body: event.data ? event.data.text() : 'New content available!',
    icon: '/icon-192x192.png',
    badge: '/icon-192x192.png',
    tag: 'coding-guide-notification',
    requireInteraction: false,
    actions: [
      {
        action: 'open',
        title: 'Open App'
      },
      {
        action: 'close',
        title: 'Close'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Coding Guide', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'open') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Listen for messages from the main app
self.addEventListener('message', (event) => {
  console.log('Service Worker: Message received:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_CACHE_SIZE') {
    getCacheSize().then((size) => {
      event.ports[0].postMessage({ cacheSize: size });
    });
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    clearAllCaches().then(() => {
      event.ports[0].postMessage({ success: true });
    });
  }
});

// Utility function to get cache size
async function getCacheSize() {
  const cacheNames = await caches.keys();
  let totalSize = 0;
  
  for (const cacheName of cacheNames) {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    
    for (const key of keys) {
      const response = await cache.match(key);
      if (response) {
        const blob = await response.blob();
        totalSize += blob.size;
      }
    }
  }
  
  return totalSize;
}

// Utility function to clear all caches
async function clearAllCaches() {
  const cacheNames = await caches.keys();
  return Promise.all(
    cacheNames.map((cacheName) => caches.delete(cacheName))
  );
}