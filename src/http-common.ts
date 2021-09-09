import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

/* export default axios.create({
  baseURL: "https://parrot.app/api/v1/",
  headers: {
    "Content-type": "application/json",
  },
}); */

export default (options: AxiosRequestConfig = {}): AxiosInstance => {
  options.baseURL = "https://www.puertoparrot.com/api/pool/";
  options.method = 'GET';
  options.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "season": "2021/07",
  };

  /* if (requiresAuth) {
    options.headers.Authorization = "JWT TOKEN";
  } */
  const instance = axios.create(options);

  instance.interceptors.request.use(
    (config) => {
      // Do something before request is sent
      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      // Do something with response data
      return response;
    },
    (error) => {
      // Do something with response error
      return Promise.reject(error);
    }
  );
  return instance;
};
