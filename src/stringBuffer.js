'use strict';

function makeBuffer() {
  let buffer = '';

  return (value) => {
    if (value === undefined) {
      return buffer;
    }

    buffer += value;
  };
}

module.exports = makeBuffer;
