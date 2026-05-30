const CACHE_NAME = 'fantom11-v1.1.1';
const BASE_PATH = '/fantom-1.1';
const FILES_TO_CACHE = [
  BASE_PATH + '/',
  BASE_PATH + '/index.html',
  BASE_PATH + '/manifest.json',
  BASE_PATH + '/logo.png',
  BASE_PATH + '/icons/icon-72.png',
  BASE_PATH + '/icons/icon-96.png',
  BASE_PATH + '/icons/icon-128.png',
  BASE_PATH + '/icons/icon-144.png',
  BASE_PATH + '/icons/icon-152.png',
  BASE_PATH + '/icons/icon-192.png',
  BASE_PATH + '/icons/icon-384.png',
  BASE_PATH + '/icons/icon-512.png'
];

// Install: Cache all static assets
self.addEventListener('install', (e) => {
  console.log('[SW] Installing...');
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching app shell');
      return cache.addAll(FILES_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate: Clean up old caches
self.addEventListener('activate', (e) => {
  console.log('[SW] Activating...');
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Serve from cache, fallback to network
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Only handle requests within our scope
  if (!url.pathname.startsWith(BASE_PATH)) {
    return fetch(e.request);
  }

  e.respondWith(
    caches.match(e.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(e.request).then((networkResponse) => {
        return networkResponse;
      }).catch(() => {
        // Offline fallback
        if (e.request.mode === 'navigate') {
          return caches.match(BASE_PATH + '/index.html');
        }
      });
    })
  );
});
