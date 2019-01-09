function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  array.forEach(e => {
    if (typeof e === 'number') {
      sum += e;
    } else {
      sum += sumItems(e)
    }
  })
  return sum
}

console.log(sumItems([1, [2, [3]], 4, 5]))

module.exports = sumItems;