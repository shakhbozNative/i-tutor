import {makeAutoObservable} from 'mobx';
import {LoginStore} from './auth/login/loginStore';
import {createContext} from 'react';
import {SignUpStore} from './auth/signUpEducation/signUpEducation';
import {RecoveryStore} from './auth/recovery/recoveryStore';

class RootStore {
  loginStore = new LoginStore();
  signUpEduStore = new SignUpStore();
  recoveryStore = new RecoveryStore();

  constructor() {
    makeAutoObservable(this);
  }
}

const rootStore = new RootStore();

export default createContext(rootStore);
