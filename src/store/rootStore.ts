import {makeAutoObservable} from 'mobx';
import {LoginStore} from './auth/login/loginStore';
import {createContext} from 'react';
import {SignUpStore} from './auth/signUpEducation/signUpEducation';
import {RecoveryStore} from './auth/recovery/recoveryStore';
import {ProfileStore} from './profile/profileStore';
import TokenStore from './tokenStore/TokenStore';
import {HomeStore} from './home/HomeStore';
import {BalanceStore} from './balance/BalanceStore';
import {RegisterStore} from './auth/register/RegisterStore';

export class RootStore {
  loginStore: LoginStore;
  signUpEduStore = new SignUpStore();
  recoveryStore = new RecoveryStore();
  tokenStore: TokenStore;
  profileStore: ProfileStore;
  homeStore: HomeStore;
  balanceStore: BalanceStore;
  registerStore: RegisterStore;

  constructor() {
    makeAutoObservable(this);
    this.tokenStore = new TokenStore(this);
    this.loginStore = new LoginStore(this);
    this.profileStore = new ProfileStore(this);
    this.homeStore = new HomeStore(this);
    this.balanceStore = new BalanceStore(this);
    this.registerStore = new RegisterStore(this);
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
