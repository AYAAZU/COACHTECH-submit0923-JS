//問題1
const array = [2, 4, 7, 5, 4, 3, 8]

const result = array.filter(function (item, index) {
  return index == array.indexOf(item);
});

console.log(result);


//問題2
const leapYear = function (checkYear) {
  if ((checkYear % 4 === 0) && checkYear % 100 !== 0) {
    return console.log(`${checkYear}年はうるう年です`);
  } else if (checkYear % 400 === 0) {
    return console.log(`${checkYear}年はうるう年です`);
  }
  return console.log(`${checkYear}年はうるう年ではありません`);
};


for (i = 2020; i <= 2021; i++) {
  const dt = new Date(i, 1);
  const result2020 = leapYear(dt.getFullYear());
};