'use strict';

function MakeMultiFilter(originalArray) {
  let currentArray = [...originalArray];

  const arrayFilterer = function(filterCriteria, callback) {
    if (arrayFilterer.currentArray === undefined) {
      arrayFilterer.currentArray = originalArray;
    }

    if (typeof filterCriteria !== 'function') {
      return arrayFilterer.currentArray;
    }
    else{
        arrayFilterer.currentArray = arrayFilterer.currentArray.filter(filterCriteria);
    }

    if (typeof callback === 'function') {
      callback.call(originalArray,arrayFilterer.currentArray);
    }

    return arrayFilterer;
  }

  return arrayFilterer;
}
