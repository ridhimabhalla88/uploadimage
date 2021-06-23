import {getAuthenticationToken} from '../utils/authentication';
let BaseUrl = 'http://18.191.172.112/vlee/api/';

export const ApiCall = async (parms, endUrl, callback) => {

  console.log(parms);
  var Url = BaseUrl + endUrl;

  fetch(Url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'multipart/form-data',
    },
    body: parms,
  })
    .then(response => response.json())
    .then(responseJson => {
      callback({data: responseJson});
    })
    .catch(error => {
      callback({data: error});
    });
};

export const ApiCallGet = async (method, callback, name) => {

  var methodss = BaseUrl + method;

  return fetch(methodss, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(responseJson => {
      callback({data: responseJson});
    })
    .catch(error => {
      console.error(error);
    });
};
