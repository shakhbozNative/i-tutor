import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {API_REQUESTS_TIME, API_URL} from './api.constants';
import {
  LoginPayload,
  SiginUpPayloadStudent,
  SiginUpResponse,
  signUpTeacher,
} from './requests/api.acount.tayps';

import tokens from './tokens/tokens';
class Api {
  private axiosClient: AxiosInstance;
  constructor() {
    this.axiosClient = axios.create({
      baseURL: API_URL,
      timeout: API_REQUESTS_TIME,
    });
    this.axiosClient.interceptors.response.use(
      (response: AxiosResponse) => {
        return response.data;
      },
      error => {
        if (error) {
          console.log('Erorr:', error?.response.data);
          if (error?.response?.status === 401) {
            tokens.clear();
            // window.location.href = '/';
          }
        }
        return Promise.reject(error);
      },
    );
    this.axiosClient.interceptors.request.use(
      (config: any) => {
        const token = tokens.getAccessToken();
        if (token) {
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
          };
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );
  }
  public SetAccessToken = (accessToken: string) => {
    this.axiosClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  };
  public ClearAccessToke = () => {
    delete this.axiosClient.defaults.headers.common.Authorization;
  };
  public hasAuthorizationHeader = () => {
    !!this.axiosClient.defaults.headers.common.Authorization;
  };

  public signUp = (payload: SiginUpPayloadStudent) => {
    console.log(payload);
    return this.axiosClient.post<any, SiginUpResponse>(
      '/user/sign-up-student',
      {
        payload,
      },
    );
  };

  public login = (payload: LoginPayload) =>
    this.axiosClient.post('/user/sign-in', payload);
  //m
  public signUpTeacher = (payload: signUpTeacher) => {
    console.log(payload);
    return this.axiosClient.post<any, SiginUpResponse>('/user/sign-up-tutor', {
      payload,
    });
  };

  public signUpEducation = (payload: signUpEducation) => {
    console.log(payload);
    return this.axiosClient.post<any, SiginUpResponse>(
      'user/sign-up-institution',
      {
        payload,
      },
    );
  };
}

const api = new Api();

export default api;
