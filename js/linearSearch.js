const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);
}

exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
    if (parseInt(arrayToSearchThrough.map((element, i) => element === valueToFind ? i : '').join('')) >= 0) {
        return Number(arrayToSearchThrough.map((element, i) => element === valueToFind ? i : '').join(''))
    } else {
        return undefined
    }  
};

exports.linearSearchGlobal = function(valueToFind, arrayToSearchThrough) {
    let ansArr = [];
  for (let i = 0; i < arrayToSearchThrough.length; i++) {
      if (arrayToSearchThrough[i] === valueToFind) {
          ansArr.push(i);
      }
  }
   return ansArr
};
