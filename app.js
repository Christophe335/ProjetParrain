if (navigator && navigator.serviceWorker) {
  navigator.serviceWorker.register("/serviceworker.js");
}
caches.open("pwa-assets")
.then(cache => {
  cache.add("style_D.css"); 
  cache.add("style_R.css");
  cache.addAll(["style_D.css", "style_R.css", "app.js"]); 
  cache.add("images/olivier.webp");
  cache.add("images/astro.avif");
  cache.add("images/blue.avif");
  cache.add("images/desk.avif");
  cache.add("images/enigma.avif");
  cache.add("images/milk.avif");
  cache.add("images/paint.avif");
  cache.add("images/tem.avif");
  cache.add("images/res_astro.avif");
  cache.add("images/res_blue.avif");
  cache.add("images/res_desk.avif");
  cache.add("images/res_enigma.avif");
  cache.add("images/res_milk.avif");
  cache.add("images/res_paint.avif");
});