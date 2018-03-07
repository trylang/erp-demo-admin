export function _replace(name, data, replaceData) {
  let index = data.findIndex(item => {
    return item[name] === replaceData[name];
  });
  data.splice(index, 1, replaceData);
}

export function _remove(name, param, data) {
  let index = data.findIndex(item => {
    return item[name] === param;
  });
  data.splice(index, 1);
}

// url = {url.path, url.param}
export function _returnPromise(api, url, callback) {
  return new Promise((resolve, reject) => {
    api(url).then(returnObj => {
      callback(returnObj);
      resolve(returnObj);
    }).catch((error) => {
      reject(error);
    });
  })
}