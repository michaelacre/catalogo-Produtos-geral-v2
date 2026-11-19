const CACHE='catalogo-shell-v14-sabbor-embalagem';
const SHELL=['./','./index.html','./catalogo.html','./campanha.css','./campanha-home.js','./campanha-produtos.js','./styles.css','./app.js','./campanha-natal.js','./produtos.js','./manifest.webmanifest','./assets/logos/acreaves.png','./assets/logos/dom-porquito.png','./assets/logos/fripal.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  if(u.origin!==location.origin)return;
  if(u.pathname.includes('/assets/')){
    e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(resp=>{const clone=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,clone));return resp;})));
    return;
  }
  e.respondWith(fetch(e.request).then(resp=>{const clone=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,clone));return resp;}).catch(()=>caches.match(e.request)));
});
