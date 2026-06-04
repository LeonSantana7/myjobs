const CACHE_NAME = "myjobs-v2";
const BASE = self.location.pathname.replace("/sw.js", "");
const ASSETS = [
  BASE + "/",
  BASE + "/index.html",
  BASE + "/manifest.json",
  BASE + "/icons/icon-192.png",
  BASE + "/icons/icon-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => Promise.allSettled(ASSETS.map((url) => cache.add(url)))),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)),
        ),
      ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches
      .match(e.request)
      .then(
        (cached) =>
          cached ||
          fetch(e.request).catch(() => caches.match(BASE + "/index.html")),
      ),
  );
});
