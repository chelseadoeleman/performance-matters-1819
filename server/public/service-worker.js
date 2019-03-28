const CORE_CACHE_NAME = 'core-cache'
const CORE_ASSETS = [ 
    '/css/index.css',
    '/js/index.js',
    '/offlinePage.html'
 ]

self.addEventListener('install', event => {
    event.waitUntil(
    caches.open(CORE_CACHE_NAME)
    .then(cache => cache.addAll(CORE_ASSETS))
    .then(() => self.skipWaiting())
    )
})

// self.addEventListener('activate', event => {
//     const cacheWhitelist = ['core-cache'];

//     event.waitUntil(
//       caches.keys().then(function(cacheNames) {
//         return Promise.all(
//           cacheNames.map(function(cacheName) {
//             if (cacheWhitelist.indexOf(cacheName) === -1) {
//               return caches.delete(cacheName)
//             }
//           })
//         )
//       })
//     )
// })


self.addEventListener('fetch', event => {
    if (event.request.mode === 'navigate'
        || (event.request.method === 'GET'
            && event.request.headers.get('accept').includes('text/html')
        )
    ) {
        event.respondWith(fetch(event.request.url)
        // DEMO CODE
            .then(response => {
                return caches.open('html-cache').then(cache => {
                    return cache.put(event.request.url, response.clone()).then(() => {
                        return response
                    })
                })
            })
            .catch(error => {
                return caches.open('html-cache').then(cache => {
                    return cache.match(event.request.url).then(response => {
                        console.log(response)
                        return response 
                        ? response
                        : cache.open('core-cache').then(cache => {
                            return cache.match('/offlinePage.html').then(response => {
                                return response
                            })
                        })
                    })
                })
                // return caches.match('/offlinePage.html')
            })
        )
        // END OF DEMO
    } else {
        event.respondWith(
            caches
            .match(event.request)
            .then(response => response
                ? response
                : fetch(event.request)
            )
        )
    }
})