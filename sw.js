var CACHE_NAME = 'netguia-v1';
var urlsToCache = [
    '/',
    '/index.html',
    '/css/inicio.css',
    '/css/articulos-base.css',
    '/css/articulo-mejoras.css',
    '/javascript/ui.js',
    '/javascript/buscador.js',
    '/javascript/articulo-mejoras.js',
    '/img/xds.png'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (name) { return name !== CACHE_NAME; })
                    .map(function (name) { return caches.delete(name); })
            );
        })
    );
});
