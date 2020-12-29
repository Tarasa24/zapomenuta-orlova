// Updating
self.addEventListener('message', (e) => {
  if (!e.data) {
    return
  }

  switch (e.data) {
    case 'skipWaiting':
      self.skipWaiting()
      break
    default:
      break
  }
})

// Workbox config
workbox.setConfig({ debug: false })
workbox.core.clientsClaim()

// Precaching
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

//Custom
importScripts('tiles.js')

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('OSM_TILES').then(function (cache) {
      cache.addAll(targetCache)
    })
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response
      }
      return fetch(event.request)
    })
  )
})
