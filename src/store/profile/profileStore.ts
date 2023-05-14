import axios from 'axios';
import {API_URL} from '../../api/api.constants';
import {makeAutoObservable} from 'mobx';
import {RootStore} from '../rootStore';

export class ProfileStore {
  isLoading: boolean = false;
  root: RootStore;
  _profile: any = null;

  constructor(props: RootStore) {
    makeAutoObservable(this);

    this.root = props;
  }

  getProfile = async () => {
    this.setLoading(true);
    try {
      const headers = {
        Authorization: `Bearer ${this.root.tokenStore.accessToken}`,
      };
      const profile = await axios.get(`${API_URL}/user/profile`, {headers});
      console.log({profile});
    } catch (error) {
      console.log('error Profile GET', error);
    }
    this.setLoading(false);
  };

  setProfile = (data: any) => {
    this._profile = data;
  };

  // private regiion
  private setLoading = (value: boolean) => {
    this.isLoading = value;
  };
}
