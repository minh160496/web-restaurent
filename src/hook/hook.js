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
    const newList = [];
    for (let i in list) {
      newList.push({ ...list[i], id: +i + 1 });
    }
    return newList.filter(
      (item) => item.id >= fromIndex + 1 && item.id < fromIndex + 1 + num
    );
  } else return [];
}
