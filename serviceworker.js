const precacheName ='precache-parrain';
const precacheFiles = [
    "style_D.css",
    "style_R.css",
    "app.js",
    "images/icons/android-chrome-192x192.png",
    "images/icons/android-chrome-512x512.png",
    "images/icons/apple-touch-icon-precomposed.png",
    "images/icons/apple-touch-icon.png",
    "images/icons/favicon-16x16.png",
    "images/icons/favicon-32x32.png",
    "images/icons/favicon.png",
    "images/icons/icon_m.png",
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

addEventListener('install', event => {

    
    event.waitUntil(
        caches.open(precacheName)
        .then(cache => cache.addAll(precacheFiles))
     );
  
  });