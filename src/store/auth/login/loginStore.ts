import {makeAutoObservable} from 'mobx';

type stateDataType = {
  phone: string;
  password: string;
};

const initialState = {
  phone: '998901111111',
  password: '537661',
};

export class LoginStore {
  constructor() {
    makeAutoObservable(this);
  }

  state: stateDataType = initialState;

  setState = (value: string, key: keyof stateDataType) => {
    this.state[key] = value;
  };
}
