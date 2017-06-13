/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
exports.sumOfAMultiple = function( n ) {
  var sum = 0;
  var multi = [];
  // do your work here
  if (typeof n != 'number'){ return 0; }
  if (n >= 1000){ return sum; }
  for (var i = 1; i < n; i++) {
    if (i%3 === 0 || i%5 === 0){
      multi.push(i);
    }
  }

  for (var j = 0; j < multi.length; j++) {
    sum += multi[j];
  }

  return sum;
};
