import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {API_REQUESTS_TIME, API_URL} from './api.constants';
import {
  LoginPayload,
  SiginUpPayloadStudent,
  SiginUpResponse,
  signUpTeacher,
} from './requests/api.acount.tayps';

import tokens from './tokens/tokens';
import {accessStudentStore} from '../store/auth/Access_Student/Access_Student';
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
    console.log('token ', accessToken);

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

  public accessStudentStore = (payload: any) => {
    console.log(payload);
    return this.axiosClient.post<any, accessStudentStore>('/user/update', {
      payload,
    });
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

  public signUpEducation = (payload: any) => {
    console.log(payload);
    return this.axiosClient.post<any, SiginUpResponse>(
      'user/sign-up-institution',
      {
        payload,
      },
    );
  };

  public accessStudent = (payload: any) => {
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
