caches.open("pwa-assets")
.then(cache => {
  cache.add("stylD.css"); 
  cache.add("stylP.css");
  cache.addAll(["stylD.css", "stylP.css", "app.js"]); 
  cache.add("images/olivier.avif");
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