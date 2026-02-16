const cacheName = 'naszc-gsm-v1';
const assets = ['./', './index.html', './view.html', './logo.png', './manifest.json'];
self.addEventListener('install', e => { e.waitUntil(caches.open(cacheName).then(c => c.addAll(assets))); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); });
