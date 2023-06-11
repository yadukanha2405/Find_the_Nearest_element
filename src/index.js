function solve(arr, n, m) {
  let nearestEl = Number.MAX_VALUE;
  let finalDiff = Number.MAX_VALUE;
  arr.sort((a, b) => a - b);
  let newArr = [];
  for (let i = 0; i < 10; i++) {
    if (i + 1 == arr[0]) {
      arr.splice(0, 1);
    } else {
      newArr.push(i + 1);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    let diff = newArr[i] - m > 0 ? newArr[i] - m : Infinity;
    if (diff < finalDiff) {
      finalDiff = diff;
      nearestEl = newArr[i];
    }
    finalDiff = Math.min(nearestEl, diff);
  }
  return nearestEl;
}

console.log(solve([4, 7, 10, 6, 5], 5, 6));
