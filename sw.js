// sw.js
const CACHE_NAME = "greenbite-v1";
const ASSETS = [
  "/",                
  "/index.html",
  "/style.css",
  "/main.js",
  "/images/Logo.png",
  "/images/Yoga-img.png",
  "/offline.html"
];
// Install event
self.addEventListener('install', event => {
  console.log('[SW] Installing Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching all assets');
        return cache.addAll(ASSETS);
      })
      .catch(err => console.error('[SW] Cache failed:', err))
  );
  self.skipWaiting(); 
});

// Activate event
self.addEventListener('activate', event => {
  console.log('[SW] Activating Service Worker...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request).catch(() => caches.match('/offline.html')))
  );
});