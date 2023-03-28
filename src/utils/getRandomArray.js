  const getRandomArray = (arr) => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }

// console.log(Math.random())
// console.log(getRandomArray(phrases))

export default getRandomArray