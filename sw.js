self.addEventListener('install', function(event) {
  var CACHE_NAME = 'my-site-cache-v1';
  var urlsToCache = [
    '/',
    '/assets/css/styles.css',
    '/assets/js/script.js',
    '/assets/js/aos.js',
    '/assets/js/fontawesome.min.js',
    '/assets/js/handlebars.js',
    '/assets/js/solid.min.js'
  ];

  self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    );
  });
});