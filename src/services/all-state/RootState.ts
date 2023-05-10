import {makeAutoObservable} from 'mobx';
import {createContext} from 'react';
import AuthState from './AuthState';
import RecoveryAuth from './RecoveryAuth';
import VerificationAuth from './VerificationAuth';

class RootState {
  auth = new AuthState();
  recoveryAuth = new RecoveryAuth();
  verification = new VerificationAuth();

  constructor() {
    makeAutoObservable(this);
  }
}

const rootState = new RootState();
export default createContext(rootState);
