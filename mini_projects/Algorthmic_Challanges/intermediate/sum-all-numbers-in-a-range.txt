function sumAll(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let sum = 0;
  for (let i=min; i<=max; i++) {
  sum += i;
  }
  return sum;
}