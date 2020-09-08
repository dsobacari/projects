function countdown(n) {
  // base case if (n === 1) return [1];
  if (n < 1) return [];
  const output = [n]; // [2]
  return output.concat(countdown(n - 1)); // [2, 1]
}