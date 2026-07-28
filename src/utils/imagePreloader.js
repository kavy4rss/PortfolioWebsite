// Image Preloader Utility for instant 0.01s asset loading
const preloadedUrls = new Set();

/**
 * Preloads an array of image URLs in the background during idle time.
 * @param {string[]} urls
 */
export function preloadImages(urls = []) {
  if (typeof window === 'undefined') return;

  const preloadTask = () => {
    urls.forEach((url) => {
      if (!url || preloadedUrls.has(url)) return;

      const img = new Image();
      img.src = url;
      img.decoding = 'async';
      preloadedUrls.add(url);
    });
  };

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(preloadTask, { timeout: 2000 });
  } else {
    setTimeout(preloadTask, 200);
  }
}
