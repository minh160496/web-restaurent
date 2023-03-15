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

export function useFilterFromIndex(list, fromIndex, num) {
  if (list) {
    return list.filter(
      (item, i) => i + 1 >= fromIndex && i + 1 < fromIndex + num
    );
  } else return [];
}
