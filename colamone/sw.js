/*! For license information please see sw.js.LICENSE.txt */
let version="202012311140";self.addEventListener("install",(function(e){caches.keys().then((function(e){for(let n in e)e[n]!==version&&caches.delete(e[n])}))})),self.addEventListener("fetch",(function(e){0===e.request.url.indexOf(location.origin)&&e.respondWith(caches.match(e.request).then((function(n){return void 0===n||navigator.onLine?fetch(e.request).then((function(n){let t=n.clone();return caches.open(version).then((function(n){0===e.request.url.indexOf("http")&&n.put(e.request,t)})),n})):n})))}));