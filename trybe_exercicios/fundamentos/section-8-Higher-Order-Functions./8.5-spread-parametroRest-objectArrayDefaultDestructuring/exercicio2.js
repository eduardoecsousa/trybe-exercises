const sum = (...num) => num.reduce((acc, cur) => acc + cur);

console.log(sum(4,5,6));


module.exports = sum