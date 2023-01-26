export function insertionSort(arr) {
  const pairs = [];
  let n = arr.length;
  const prevRect = arr.slice();
  for (let i = 1; i < n; ++i) {
    let key = prevRect[i].width;
    let j = i - 1;

    while (j >= 0 && prevRect[j].width > key) {
      const recti = { ...prevRect[j] };
      const rectj = { ...prevRect[j + 1] };
      prevRect[j + 1] = recti;
      prevRect[j] = rectj;
      pairs.push({
        xx: j,
        yy: j + 1,
        changed: true,
      });
      j = j - 1;
    }
    // arr[j + 1] = arr[i];
  }
  for (let i = 0; i < n; i++) {
    pairs.push({
      xx: i,
      yy: i,
      changed: true,
    });
  }
  return pairs;
}
