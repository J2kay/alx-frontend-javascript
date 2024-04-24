function getResponseFromAPI(yes) {
  return new Promise((resolve, reject) => {
    if (yes) {
      resolve('success');
    } else {
      reject(Error('failed'));
    }
  });
}

export default getResponseFromAPI;
