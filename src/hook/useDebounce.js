export function useDebounce(callback, duration = 500) {
  let timeOut;
  return (...args) => {
    if (timeOut) {
      window.clearTimeout(timeOut);
    }

    timeOut = setTimeout(() => {
      callback.apply(null, args);
    }, duration);
  };
}
