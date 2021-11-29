'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4cda9a94f24f8780cb72e5115e974f61",
"index.html": "ca6ae2597476df0412ba65aa3fe14756",
"/": "ca6ae2597476df0412ba65aa3fe14756",
"main.dart.js": "c68e1e8901d7e893bf2b909309ec36bd",
"README.md": "962e9d92c23b82590bff4c904e7f7399",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "506bd8bc70e8926b399e3835f0ca0355",
".git/config": "eaa2c4ffd8a896c5287befefb83e4393",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/94294e4fda56f7e1a5ec5e30f8d7414190e58d": "9d9b8124a2be273986cec66a68685aa7",
".git/objects/9c/6d60aa42b397ad064dbb8aedf8438373b3b279": "c2c2dd3f260204857ca9248d20ce6a2f",
".git/objects/ac/2f74d079749684c993c2ffbec0480690788432": "9b4a0c851b7a7745e4a078dcc83f2226",
".git/objects/b3/04cae98b1c6d73c8d5d7bb1efb8c185f871d32": "4b53a2e4d25d4259362e17721d8daf68",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/b1b0e8d2a0e5b09616cf0bdea8bbdd0b98bd33": "5e17c23a95855a02751dad8deec9b719",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/4111602824bebe233bba6f2214997a81fdda9a": "fca75a6c7fcb1cc9351362f00b981c11",
".git/objects/f3/c361420e83bed17b63e9db9b507bc5a9c9c700": "ea4429d291eac25e21f12b2c4dda4c77",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/be77b2318a769ea93ef81e451a1b8cadb1fb03": "70f5b84e12d5030c5cbbb2ac706379b5",
".git/objects/fb/f17e253d04ed14d832800a38250e828e7da7a3": "08ca8560fbd3ad867fbd923c63ff8e12",
".git/objects/fb/46b1d0dc4674f59fca4e967282f9ae13a1b6b7": "53aeae7ac4f307b892316ba1443ef6f8",
".git/objects/ed/0c724e1982fb0baf1c6687c4699a7c74591f0c": "95077048c62b88502a8cab187cced409",
".git/objects/ed/f859741bcede6192ce08ed333a1993b286e98b": "ebab15f47b222d9121dccc5aaa7f9e5e",
".git/objects/18/dfb932df67a670ea56c35a2de79a001be919b7": "8055ed482ed2eeef8136154e9907556d",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/df3813f0bb71e90ed5ff637caaeb7347e0df74": "faec76e2dd84451c8b1850bd18c4701b",
".git/objects/87/84870ec0a3e7925575a0c410b417e40979103d": "1a5286e3ffdd31ae5c835dc0d35469ae",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/72/5dde6b32464487f26a77da422abefae3147ae1": "30d34dc0b96f1b9931bbd11def82aaac",
".git/objects/2a/e252573ab56cd940bfca54969a6860ba3d663e": "083e2291ed8f678d5688e445be4ffb52",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/91/1f2156ca278dbb9555be25a8d94a725e42c4bf": "c3c586c866d58693da287c11b9648807",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/96/cfe28a993e70318bfd4f921a4bbb874a78d781": "4281c3de03aadba6624f2c1d7e9ca65b",
".git/objects/90/6c23f732f404ab496c6bf14a749f4cc4c96c66": "11aa5d247c8b0d8250b7965c1e9b9269",
".git/objects/d2/5922c48347b7f5edeae87e8b45dc1aec49756d": "8f472077669b3c11b491cc48d3b778b5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/f5bf74faa24e2801560a37a5e332c07b641e50": "5dee5af91fe350fddbe3b274249a2872",
".git/objects/f0/8281c17aece35a5b3f8da3df1e139a421b4b83": "29d47e10961900d59820b4081fee0139",
".git/objects/f0/8a81c5f8f7bbadfa6e0a9a8c71395774cc2078": "b4225ce1cd0cdffb2cb9cc5323d76a5d",
".git/objects/ff/7b7fed522db7b0cb638cdd86dc5c6f862a1dac": "bc441be7afd580da4ef060e3ba103266",
".git/objects/cb/3a287f511e8574bd207c9660df503075c06355": "0ea9870a54ed2f8d0f1e0523d37b3d6b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/5f6fd0eb31ff1644c119915eacfe48b053c362": "9eb9fa11726ddecdf78b1bec33236ec6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/210b6cc6292419216f48cbea4414cf65f1b20f": "4bd174f21c6ed2418d4755331eebbd93",
".git/objects/23/00c8ba7b4c101a282a1cc6de0246fc5a12a434": "845b27662b031f2b9ad6719b5951990d",
".git/objects/23/77e2eb9bb1d5198dcf22ac76d985df263064a6": "c25961a4abd34d7682e4b189daa13d2e",
".git/objects/1d/6e35b1d2385209453b18136b5cd160f4829827": "e66ac7576c7ab085b51579b715464039",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "63026055e431bd10912ac8239a1c53ad",
".git/logs/refs/heads/main": "63026055e431bd10912ac8239a1c53ad",
".git/logs/refs/remotes/origin/main": "fc72a0003ce14c49ff9d6f04c8c69d8c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a4a9d5ea98efac6f648e657088428b66",
".git/refs/remotes/origin/main": "a4a9d5ea98efac6f648e657088428b66",
".git/index": "20d5804f003df958a0fcfef0800774bf",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "1d72b25ccd8eeeb8a6862d783c7f7b3d",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "fc29db4d5e5cd9e2351f2b50f77a14a5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
