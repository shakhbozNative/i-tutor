import {makeAutoObservable, runInAction, values} from 'mobx';
import {LoginStore} from './auth/login/loginStore';
import {createContext, useEffect} from 'react';
import {SignUpStore} from './auth/signUpEducation/signUpEducation';
import {RecoveryStore} from './auth/recovery/recoveryStore';
import {ProfileStore} from './profile/profileStore';
import TokenStore from './tokenStore/TokenStore';

export class RootStore {
  loginStore: LoginStore;
  signUpEduStore = new SignUpStore();
  recoveryStore = new RecoveryStore();
  profileStore: ProfileStore;
  tokenStore: TokenStore;

  constructor() {
    makeAutoObservable(this);
    this.tokenStore = new TokenStore(this);
    this.profileStore = new ProfileStore(this);
    this.loginStore = new LoginStore(this);
  }

  sync = async () => {
    await Promise.all(
      Object.values(this).map(store => {
        return store?.sync ? store?.sync() : Promise.resolve();
      }),
    );
  };

  clear = async () => {
    await Promise.all(
      Object.values(this).map(store => {
        return store?.clearStore ? store?.clearStore() : Promise.resolve();
      }),
    );
  };
}

const rootStore = new RootStore();

export default createContext(rootStore);
