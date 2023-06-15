import {API_URL} from '../../api/api.constants';
import {makeAutoObservable} from 'mobx';
import {RootStore} from '../rootStore';
import {LoginResponseUser} from '../auth/login/LoginStore.type';
import {Operation} from '../../helper/Operation';
import $api from '../../api/api';

export class ProfileStore {
  readonly root: RootStore;
  _operation = new Operation<LoginResponseUser>({} as LoginResponseUser);
  _profile: LoginResponseUser = {} as LoginResponseUser;
  constructor(props: RootStore) {
    makeAutoObservable(this);

    this.root = props;
  }

  getProfile = async () => {
    await this._operation.run(() => {
      return $api.get(`${API_URL}/user/profile`);
    });

    if (this._operation.isSuccess) {
      const data = await this._operation.data;
      this.setProfile(data);
    }
  };

  postProfileEditStudent = async () => {
    const formData = new FormData();
    console.log(this._profile);

    for (var key in this._profile) {
      formData.append(key, this._profile[key]);
    }

    await this._operation.run(() => {
      return $api.post(`${API_URL}/user/update`, formData, {
        headers: {'Content-Type': 'multipart/form-data'},
      });
    });

    if (this._operation.isSuccess) {
      const res = this._operation.data;
      console.log('res', res);
    }
  };

  setFormStudent = (key: keyof LoginResponseUser, value: string) => {
    // @ts-ignore
    this._profile[key] = value;
  };

  setProfile = (data: LoginResponseUser) => {
    this._profile = data;
  };
}
