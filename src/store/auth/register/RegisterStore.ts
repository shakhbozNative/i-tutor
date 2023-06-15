import {makeAutoObservable} from 'mobx';
import NavigationService from '../../../NavigationService';
import $api from '../../../api/api';
import {API_URL} from '../../../api/api.constants';
import {RootStore} from '../../rootStore';
import {Operation} from '../../../helper/Operation';

export class RegisterStore {
  private readonly root: RootStore;
  _operation = new Operation<any>({});
  isError: boolean = false;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
  }

  onRegisterStudent = async (data?: any) => {
    if (!data) return;

    await this._operation.run(() => {
      return $api.post(`${API_URL}/user/sign-up-student`, data);
    });

    if (this._operation.isSuccess) {
      const token = this._operation.data.token;

      await NavigationService.navigate('LOGIN');
      // await this.root.tokenStore._set(token);
    }
  };

  onRegisterTeacher = async (data?: any) => {
    if (!data) return;

    await this._operation.run(() => {
      return $api.post(`${API_URL}user/sign-up-tutor`, data);
    });

    if (this._operation.isSuccess) {
      const token = this._operation.data.token;

      await NavigationService.navigate('LOGIN');
      // await this.root.tokenStore._set(token);
    }
  };

  onRegisterEducation = async (data?: any) => {
    if (!data) return;

    await this._operation.run(() => {
      return $api.post(`${API_URL}/user/sign-up-institution`, data);
    });

    if (this._operation.isSuccess) {
      const token = this._operation.data.token;

      await NavigationService.navigate('LOGIN');
      // await this.root.tokenStore._set(token);
    }
  };
}
