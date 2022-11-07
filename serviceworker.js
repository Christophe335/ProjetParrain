const cacheName = "MonGrandCache_v1";

const precacheAssets = [
    "images/olivier.webp",
    "images/tem.avif",
    "images/astro.avif",
    "images/blue.avif",
    "images/desk.avif",
    "images/enigma.avif",
    "images/milk.avif",
    "images/paint.avif",
    "images/res_astro.avif",
    "images/res_blue.avif",
    "images/res_desk.avif",
    "images/res_enigma.avif",
    "images/res_milk.avif",
    "images/res_paint.avif"
];

self.addEventListener('install', (event) => {
    // Precache assets on install
    event.waitUntil(caches.open(cacheName).then((cache) => {
      return cache.addAll(precachedAssets);
    }));
  });
  
  self.addEventListener('fetch', (event) => {
    // Is this one of our precached assets?
    const url = new URL(event.request.url);
    const isPrecachedRequest = precachedAssets.includes(url.pathname);
  
    if (isPrecachedRequest) {
      // Grab the precached asset from the cache
      event.respondWith(caches.open(cacheName).then((cache) => {
        return cache.match(event.request.url);
      }));
    } else {
      // Go to the network
      return;
    }
  });