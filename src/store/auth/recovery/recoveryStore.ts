import {makeAutoObservable} from 'mobx';

type stateType = {
  phone: string;
  code: string;
};

const initialState = {
  phone: '',
  code: '',
};

export class RecoveryStore {
  constructor() {
    makeAutoObservable(this);
  }

  state: stateType = initialState;

  setState = (value: string, key: keyof stateType) => {
    this.state[key] = value;
  };
}
