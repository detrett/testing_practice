export function analyzeArray(array) {
  const object = {
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  }
  object.average = array.reduce((acc, cur) => acc + cur, 0) / array.length;
  object.min = array.reduce((acc, cur) => Math.min(acc, cur));
  object.max = array.reduce((acc, cur) => Math.max(acc, cur));
  object.length = array.length;

  return object;
}
