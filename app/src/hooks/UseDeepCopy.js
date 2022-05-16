export default function UseDeepCopy(src) {
  let target = Array.isArray(src) ? [] : {};
  for (let key in src) {
    let v = src[key];
    if (v) {
      if (typeof v === "object") {
        target[key] = UseDeepCopy(v);
      } else {
        target[key] = v;
      }
    } else {
      target[key] = v;
    }
  }
  return target;
}
