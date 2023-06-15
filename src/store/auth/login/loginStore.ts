import {makeAutoObservable, runInAction} from 'mobx';
import {RootStore} from '../../rootStore';
import {Operation} from '../../../helper/Operation';
import {Alert} from 'react-native';
import $api from '../../../api/api';
import {API_URL} from '../../../api/api.constants';
import {LoginResponseUser} from './LoginStore.type';
import NavigationService from '../../../NavigationService';

type stateDataType = {
  phone: string;
  password: string;
};

const initialState = {
  phone: '998901111111',
  password: '11223344',
};

export class LoginStore {
  private readonly root: RootStore;
  form: stateDataType = initialState;
  _operation = new Operation<LoginResponseUser>({} as LoginResponseUser);
  isError: boolean = false;
  isLoading: boolean = false;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
  }

  onLogin = async () => {
    runInAction(() => {
      this.isLoading = true;
    });
    const {phone, password} = this.state;
    const data = {phone, password};

    await this._operation.run(() => {
      return $api.post(`${API_URL}/user/sign-in`, data);
    });

    if (this._operation.isSuccess) {
      const token = this._operation.data.token;

      await this.root.tokenStore._set(token);
      await NavigationService.navigate('HOME');
    }

    if (this._operation.isError) {
      runInAction(() => {
        this.isError = true;
      });
    }
    runInAction(() => {
      this.isLoading = false;
    });
  };

  onLogOut = async () => {
    await this.root.tokenStore.clear();
  };

  state: stateDataType = initialState;

  setState = (value: string, key: keyof stateDataType) => {
    this.isError = false;
    this.state[key] = value;
  };
}
