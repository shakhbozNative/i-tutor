import axios, {AxiosInstance} from 'axios';
import {makeAutoObservable} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from './api.constants';
import {IToken} from '../store/tokenStore/TokenStore';
export const TIME_OUT = 30000;

class Api {
  readonly api: AxiosInstance;

  constructor() {
    makeAutoObservable(this);
    this.api = axios.create({
      baseURL: API_URL,
      timeout: TIME_OUT,
    });

    this.api.interceptors.request.use(
      async (config: any) => {
        const tokenFromAsyncStore =
          (await AsyncStorage.getItem(IToken.accessToken)) || '';

        this.setAccessToken(tokenFromAsyncStore);
        return config;
      },
      error => Promise.reject(error),
    );
  }

  private setAccessToken = (accessToken: string) => {
    this.api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  };

  // public postApiVActivityTaskAttachment = (
  //   id: string,
  //   data: FormData,
  //   token: string,
  // ) =>
  //   this.api.post(
  //     `http://localhost:8000/api/v1/Activity/Task/${id}/Attachment`,
  //     data,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     },
  //   );
}

const $api = new Api().api;
export default $api;
