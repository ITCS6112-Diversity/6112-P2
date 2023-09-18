'use strict';

function MakeMultiFilter(originalArray) {
  let currentArray = [...originalArray];

  function arrayFilterer(filterCriteria, callback) {
    if (typeof filterCriteria !== 'function') {
      return currentArray;
    }

    currentArray = currentArray.filter(filterCriteria);

    if (typeof callback === 'function') {
      callback(currentArray);
    }

    return arrayFilterer;
  }

  return arrayFilterer;
}
