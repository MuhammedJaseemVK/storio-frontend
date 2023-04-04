// service-worker.js

workbox.routing.registerRoute(
    new RegExp('/api/.*'),
    new workbox.strategies.NetworkFirst()
  )
  
  workbox.routing.registerRoute(
    new RegExp('/static/.*'),
    new workbox.strategies.CacheFirst()
  )
  