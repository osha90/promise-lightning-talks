// Basic Error handling in promises
/* When we trigger an error the control goes to the nearest catch,
   which happens to be the second catch not the first one
*/

const basicPromise = new Promise((resolve) => {
  resolve(1);
});

basicPromise
  .then(
    () => {
      throw new Error('Creating a new error');
    },
    (err) => {
      console.log('Inside the first catch, this never gets triggered', err);
    },
  )
  .catch((err) => {
    console.log('Inside the second catch, this gets triggered', err);
  });
