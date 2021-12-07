
function average(numbers) {
  // filters all the numbers which are not Nan and stores them in nanListNumbers
  const nanListNumbers = numbers.filter((number) => {
    return !Number.isNaN(number);
  });

  return nanListNumbers.reduce((p, c)=> p + c, 0) / nanListNumbers.length;
}

module.exports = {average};
