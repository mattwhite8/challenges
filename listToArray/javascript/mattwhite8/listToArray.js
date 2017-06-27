function listToArray(list) {
  const arr = [];
  function loop(innerList) {
    Object.keys(innerList).forEach((key) => {
      if (innerList[key] !== null && typeof innerList[key] !== 'object') {
        arr.push(innerList[key]);
      } else {
        loop(innerList[key]);
      }
    });
  }
  loop(list);
  return arr;
}

const result = listToArray({ value: 1, next: { value: 2, next: { value: 3 } } });

console.log(result);
