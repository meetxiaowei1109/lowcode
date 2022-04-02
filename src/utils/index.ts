export function throttle(func: any, wait: number) {
  var previous = 0;
  return function () {
    let now = Date.now();
    let args = arguments;
    if (now - previous > wait) {
      func(...args);
      previous = now;
    }
  };
}
