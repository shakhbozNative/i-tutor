import {makeAutoObservable} from 'mobx';
import {RootStore} from '../../rootStore';
import {Operation} from '../../../helper/Operation';
import {Alert} from 'react-native';
import $api from '../../../api/api';
import {API_URL} from '../../../api/api.constants';
import {LoginResponseUser} from './LoginStore.type';

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

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
  }

  onLogin = async () => {
    const {phone, password} = this.form;
    const data = {phone, password};

    await this._operation.run(() => {
      return $api.post(`${API_URL}/user/sign-in`, data);
    });

    if (this._operation.isSuccess) {
      const token = this._operation.data.token;

      await this.root.tokenStore._set(token);

      Alert.alert('Success! You successfully login!', '', [
        {
          text: 'OK',
        },
      ]);
    }
  };

  state: stateDataType = initialState;

  setState = (value: string, key: keyof stateDataType) => {
    this.state[key] = value;
  };
}
