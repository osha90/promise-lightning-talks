/**
 * Dont mix promises and throws in a function
 */
const delayedMultiply = (val1, val2) => {
  if (typeof val1 !== 'number' && typeof val2 !== 'number') {
    throw new Error('please pass number dum dum');
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val1 * val2);
    }, 1000);
  });
};

delayedMultiply(2, 2).then((val) => {
  console.log('delayed multiplyed value is ', val);
});
/**
 * Remember to comment this as the above throw happens sync and will stop execution
 */
delayedMultiply('', '')
  .then((val) => {
    console.log('delayed multiplyed value is ', val);
  })
  .catch((err) => {
    console.log('it must handle errors', err);
  });

/**
 * Solution do this instead
 */

const betterDelayedMultiply = (val1, val2) => {
  if (typeof val1 !== 'number' && typeof val2 !== 'number') {
    return Promise.reject(new Error('please pass number dum dum'));
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val1 * val2);
    }, 1000);
  });
};

betterDelayedMultiply(2, 2).then((val) => {
  console.log('better delayed multiplyed value is ', val);
});

betterDelayedMultiply('', '')
  .then((val) => {
    console.log('better delayed multiplyed value is ', val);
  })
  .catch((err) => {
    console.log('it must handle errors', err);
  });
