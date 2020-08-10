// Workbox config
workbox.setConfig({ debug: true });
addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    skipWaiting();
  }
});

// Precaching
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

//Custom
importScripts('tiles.js');

self.addEventListener('install', function(event) {
  console.log('…installed');
  event.waitUntil(
    caches.open('v1::fundamentals').then(function(cache) {
      console.log('prefilling…');
      cache.addAll(targetCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
