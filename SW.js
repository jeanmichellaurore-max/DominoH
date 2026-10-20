const CACHE_NAME = 'domino-kreyol-v1';
const assetsToCache = [
  'DOMINO_2.html',
  'manifest.json'
];

// Enstalasyon Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Rekipere fichye yo nan kach lè l offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
