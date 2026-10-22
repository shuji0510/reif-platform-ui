// 一度開いたら、電波がなくても遊べるように、読み込んだファイルを端末に保存する
const CACHE = "hkm-v2";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./qrcode.js",
  "./img/anat.jpg", "./img/s/anat.jpg", "./img/anne.jpg", "./img/s/anne.jpg", "./img/annun.jpg", "./img/s/annun.jpg", "./img/dogcat.jpg", "./img/s/dogcat.jpg", "./img/ermine.jpg", "./img/s/ermine.jpg", "./img/folies.jpg", "./img/s/folies.jpg", "./img/heli.jpg", "./img/s/heli.jpg", "./img/jerome.jpg", "./img/s/jerome.jpg", "./img/john.jpg", "./img/s/john.jpg", "./img/joseph.jpg", "./img/s/joseph.jpg", "./img/last.jpg", "./img/s/last.jpg", "./img/milk.jpg", "./img/s/milk.jpg", "./img/mona.jpg", "./img/s/mona.jpg", "./img/night.jpg", "./img/s/night.jpg", "./img/pump.jpg", "./img/s/pump.jpg", "./img/self.jpg", "./img/s/self.jpg", "./img/study.jpg", "./img/s/study.jpg", "./img/water.jpg", "./img/s/water.jpg", "./img/yoz.jpg", "./img/s/yoz.jpg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// 保存済みがあればすぐ返し、裏で最新版を取りに行く
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  e.respondWith(
    caches.match(req, {ignoreSearch: req.mode === "navigate"}).then(hit => {
      const net = fetch(req).then(res => {
        if (res && (res.ok || res.type === "opaque")) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => hit || caches.match("./index.html"));
      return hit || net;
    })
  );
});
