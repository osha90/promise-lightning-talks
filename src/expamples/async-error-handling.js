// Asynchronous error handling in promises
/**
 * Inside seTimeout we are triggering an error, see how this error never
 * triggers the catch block.
 */

const asyncPromiseWithError = new Promise(() => {
  setTimeout(() => {
    throw new Error('Creating a Error');
  }, 0);
});


asyncPromiseWithError.catch((err) => {
  console.log("won't handle async errors ", err);
});


/**
 * Solution to this problem.
 * Never throw async inside promises, instead reject to handle errors
 * See how the catch block gets triggered
 */

const betterAsyncPromiseWithError = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Creating a Error'));
  }, 0);
});

betterAsyncPromiseWithError.catch((err) => {
  console.log('will be able to handle async errors ', err);
});


/**
 * Never do this, becuase nothing will happen as promise will never fulfilled
 */

// figure out what happens here
const fun = () =>
  new Promise(() => {
    setTimeout(() => {
      throw new Error('Creating a new synchronous error');
    }, 0);
  }).catch((err) => {
    console.log("won't handle async errors ", err);
  });

fun()
  .then(() => {
    console.log('this nevers gets triggered');
  })
  .catch(() => {
    console.log('this nevers gets triggered');
  });

