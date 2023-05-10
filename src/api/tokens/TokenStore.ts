import AsyncStorage from '@react-native-async-storage/async-storage';
import {makeAutoObservable} from 'mobx';
import {AppRootStore} from '../../services/all-store/RootStore';

export enum IToken {
  accessToken = '@ACCESS_TOKEN',
}

export default class TokenStore {
  accessToken: string = '';
  root: AppRootStore;

  constructor(root: AppRootStore) {
    makeAutoObservable(this);
    this.root = root;

    this.getAccesTokenOfLocalStore();
  }

  get isVisible(): boolean {
    return !!this.accessToken;
  }

  private getAccesTokenOfLocalStore = async () => {
    try {
      const token = (await AsyncStorage.getItem(IToken.accessToken)) || '';
      this.accessToken = token;
    } catch (err) {}
  };

  _set = async (token: string) => {
    try {
      this.accessToken = token;
      await AsyncStorage.setItem(IToken.accessToken, token);
    } catch (err) {}
  };

  _get = () => this.accessToken;

  clear = async () => {
    try {
      this.accessToken = '';
      await AsyncStorage.removeItem(IToken.accessToken);
    } catch (err) {}
  };
}
