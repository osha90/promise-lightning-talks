// Synchronous error handling in promises
// Inside the promise producer code we are calling syncFn which throws an exception
// See how the exception is triggering the catch block


const syncFn = () => {
  throw new Error('Creating a Error');
};

const syncPromiseWithError = new Promise(() => {
  syncFn();
});

syncPromiseWithError.catch((err) => {
  console.log('will handle sync errors ', err);
});
