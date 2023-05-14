import {keys, makeAutoObservable} from 'mobx';

type stateDataType = {
  education: {
    educational_name: string;
    educational_address: string;
    email: string;
    phone: string;
    password: string;
    country_id: string;
    educational_region: string;
  };
  student: {
    email: string;
    name: string;
    phone: string;
    password: string;
  };
  teacher: {
    name: string;
    lastname: string;
    fname: string;
    phone: string;
    email: string;
    password: string;
  };
};

type singUpType = keyof stateDataType;

const initialState = {
  education: {
    educational_name: '',
    educational_address: '',
    email: '',
    phone: '',
    password: '',
    country_id: '',
    educational_region: '',
  },
  student: {
    email: '',
    name: '',
    phone: '',
    password: '',
  },
  teacher: {
    name: '',
    lastname: '',
    fname: '',
    phone: '',
    email: '',
    password: '',
  },
};

export class SignUpStore {
  constructor() {
    makeAutoObservable(this);
  }

  state: stateDataType = initialState;

  setStateEdu = (value: string, key: keyof stateDataType['education']) => {
    this.state.education[key] = value;
  };

  setStateStudent = (value: string, key: keyof stateDataType['student']) => {
    this.state.student[key] = value;
  };

  setStateTeacher = (value: string, key: keyof stateDataType['teacher']) => {
    this.state.teacher[key] = value;
  };
}
