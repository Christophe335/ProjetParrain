caches.open("pwa-assets")
.then(cache => {
  cache.addAll(["stylD.css", "stylP.css", "app.js"]); 
  cache.addAll([
    "images/olivier.avif",
    "images/astro.avif",
    "images/blue.avif",
    "images/desk.avif",
    "images/enigma.avif",
    "images/milk.avif",
    "images/paint.avif",
    "images/tem.avif",
    "images/res_astro.avif",
    "images/res_blue.avif",
    "images/res_desk.avif",
    "images/res_enigma.avif",
    "images/res_milk.avif",
    "images/res_paint.avif"
  ]);
});