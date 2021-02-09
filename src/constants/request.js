import axios from "axios";
const AsyncRequest = axios.create(); // with loaders on client side
const Request = axios.create(); // no intereptors/loaders

const LoaderId = "__CUSTOM_CUBE_LOADER__";
const toggleLoader = show => {
  if (typeof document !== "undefined") {
    if (document.getElementById(LoaderId)) {
      document.getElementById(LoaderId).style.display = show ? "block" : "none";
    }
  }
};
AsyncRequest.interceptors.request.use(
  config => {
    toggleLoader(true);
    return config;
  },
  error => Promise.reject(error)
);
AsyncRequest.interceptors.response.use(
  config => {
    toggleLoader(false);
    return config;
  },
  error => {
    toggleLoader(false);
    return Promise.reject(error);
  }
);

export const makeAsyncRequest = (method, url, data) => {
  const options = {
    method,
    url,
    data
  };
  return AsyncRequest(options);
};
