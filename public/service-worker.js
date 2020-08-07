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
self.addEventListener('push', function(event) {
  var title = 'Notification test';
  var body = event.data.text();
  var icon = '/img/icons/android-chrome-192x192.png';

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
    })
  );
});
