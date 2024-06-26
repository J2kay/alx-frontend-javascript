function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    promise.then(() => {
      console.log('Got a response from the API');
      resolve({ status: 200, body: 'success' });
    }).catch(() => {
      reject(Error());
    });
  });
}

export default handleResponseFromAPI;
