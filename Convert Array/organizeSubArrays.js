// given an aray with ['a1', 'a2', .....'aN', 'b1', 'b2', ....'bN', 'c1', 'c2', .....'cN'],
// stagger the subarrays so it becomes ['a1', 'b1', 'c1', 'a2', 'b2', 'c2', ...'aN', 'bN', 'cN']
// 1. do it the bruteforce way with no constraints
// 2. do it in linear time with linear space
// 3. do it in linear time with constant space

/* Brute-Force O(nlog(n)) with O(1) space */
const organize = arr => arr.sort((a, b) => Number(a[1]) - Number(b[1]));

/* O(n) time with O(n) space */
const organize2 = arr => {
  const n = arr.length;
  let aStart = 0;
  let bStart = n;
  let cStart = n * 2;
  const results = [];
  for (var i = 0; i < arr.length; i++) {
    if (i % 3 === 0) {
      results.push(arr[aStart++]);
    } else if ((i - 1) % 3 === 0) {
      results.push(arr[bStart++]);
    } else {
      results.push(arr[cStart++]);
    }
  }
  return results;
  
  /* Alternate solution */
//   const findCorrectIndex = entry => {
//     let numRounds = (Number(entry[1]) - 1) * 3;
//     return entry[0] === 'a' ? numRounds : entry[0] === 'b' ? numRounds + 1 : numRounds + 2;
//   };
//   let sortedArr = [];
//   arr.forEach(entry => sortedArr[findCorrectIndex(entry)] = entry);
//   return sortedArr;
};

/* Linear-Time with constant space */
const organize3 = arr => {
  // currently a work in progress
};
