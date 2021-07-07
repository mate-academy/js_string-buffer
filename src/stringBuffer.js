'use strict';

/**
 * Implement string buffer:
 *
 * cccccccccccccccccccccccccccccccccccc
 *
 * @return {function}
 */
function makeBuffer() {
  let res = '';

  return function(item) {
    if (item === undefined) {
      return res;
    }
    res += item;

    return res;
  };
}

module.exports = makeBuffer;
