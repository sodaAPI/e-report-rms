// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://cra.link/PWA

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/
    )
);
export function register(config) {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener("load", () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {});
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl)
    .then((registration) => {
      const installingWorker = registration.installing;
      if (!installingWorker) return;

      installingWorker.onstatechange = () => {
        if (installingWorker.state === "installed" && navigator.serviceWorker.controller) {
          console.log("New content is available and will be used when all tabs for this page are closed.");
          if (config && config.onUpdate) config.onUpdate(registration);
        } else {
          console.log("Content is cached for offline use.");
          if (config && config.onSuccess) config.onSuccess(registration);
        }
      };
    })
    .catch(error => console.error("Error during service worker registration:", error));
}

function checkValidServiceWorker(swUrl, config) {
  fetch(swUrl, { headers: { "Service-Worker": "script" }})
    .then((response) => {
      if (response.status === 404 || response.headers.get("content-type").indexOf("javascript") === -1) {
        navigator.serviceWorker.ready.then((registration) => registration.unregister().then(() => window.location.reload()));
      } else {
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => console.log("No internet connection found. App is running in offline mode."));
}

export function unregister() {
  if (navigator.serviceWorker) {
    navigator.serviceWorker.ready
      .then((registration) => registration.unregister())
      .catch(error => console.error(error.message));
  }
}

