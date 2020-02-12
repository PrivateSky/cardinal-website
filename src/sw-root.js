const cacheAssets = [
    '/themes/cardinal/assets/bootstrap/css/bootstrap.css',
    '/themes/cardinal/assets/fonts/css/font-awesome.min.css',
    '/themes/commons/bootstrap/bootstrap.css',
    '/themes/commons/fonts/font-awesome.min.css',
    '/themes/cardinal/components/psk-button/psk-button.css',
    '/themes/cardinal/components/psk-card/psk-card.css',
    '/themes/cardinal/components/psk-icon/psk-icon.css',
    '/themes/cardinal/components/psk-img/psk-img.css',
    '/themes/cardinal/components/psk-button/psk-button.css',
    '/themes/cardinal/components/psk-label/psk-label.css',
];


self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            cache.addAll(cacheAssets);
        }).then(() => self.skipWaiting())
    );
});


self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((resp) => {
            return resp || fetch(event.request).then((response) => {
                let responseClone = response.clone();
                caches.open('v1').then((cache) => {
                    cache.put(event.request, responseClone);
                });

                return response;
            });
        }).catch(() => {
            console.error("ERROR")
            //return caches.match('./sw-test/gallery/myLittleVader.jpg');
        })
    );
});


// self.addEventListener('fetch', event => {
//     if(event.request.url)
//     console.log("(9)served from service worker: ",event.request.url);
//     // serve as soon as possible from cache
//     event.respondWith(fromCache(event.request));
//     // update cache
//     event.waitUntil(
//         update(event.request)
//     );
// });
/**
 *
 * Helper methods
 */
function fromCache(request) {
    return caches.open(CACHE_NAME).then(cache => {
        return cache.match(request);
    });
}

function update(request) {
    caches.open(CACHE_NAME).then(cache => {
        fetch(request).then(response => {
            cache.put(request, response)
        });
    });
}