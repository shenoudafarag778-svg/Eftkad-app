const CACHE_NAME = 'eftkad-app-v1';
const urlsToCache = [
    './index.html',
    './manifest.json'
];

// تثبيت ملفات الكاش
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

// جلب البيانات (العمل بدون إنترنت)
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});