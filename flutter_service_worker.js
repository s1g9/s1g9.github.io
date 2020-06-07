'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "35fcff27e686d346b7ca980b3e1dc495",
"assets/assets/fonts/Work_Sans/WorkSans-Bold.ttf": "9e150cff4fc476012d62575e7b17b2d7",
"assets/assets/fonts/Work_Sans/WorkSans-Medium.ttf": "816c43ce4c83ecd53572f8ec92d85bc2",
"assets/assets/fonts/Work_Sans/WorkSans-SemiBold.ttf": "74460583ab1c0fa092289a5de795eb2b",
"assets/assets/img/login_logo.png": "8131563a4747dd8b818222de72eb6208",
"assets/FontManifest.json": "19e55cff58d8f134b73126775c770231",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "bc12db5723b59ac483a55331b0f9030d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.png": "1fd5f7131830bfbfa4101e09cdc94fd2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "6868cca96b221170d1ff59d3fb70c245",
"/": "6868cca96b221170d1ff59d3fb70c245",
"main.dart.js": "3572bdbfc5789c1f4ce24f55049dfa14",
"manifest.json": "93465fa57d4535dc57f667f4eb1b9304"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
