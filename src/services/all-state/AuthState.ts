import {makeAutoObservable} from 'mobx';

type Login = {
  phone: string;
  password: string;
};
type Event = any;

type LoginNewPasswort = {
  email: string;
  password: string;
  passwordConfirm: string;
};

type siginUpStudent = {
  phone: string;
  name: string;
  password: string;
  email: string;
};

type siginUpTeacher = {
  phone: string;
  name: string;
  fname: string;
  lastname: string;
  password: string;
  email: string;
  institution_id: number;
};

type siginUpEdication = {
  educational_name: string;
  educational_address: string;
  email: string;
  phone: number;
  password: string;
  country_id: number;
  educational_region: number;
};

type SiginUpCode = {
  code: string;
};

export default class AuthState {
  setSignUp(e: string, arg1: string): void {
    throw new Error('Method not implemented.');
  }
  constructor() {
    makeAutoObservable(this);
  }
  private login: Login = {
    phone: '',
    password: '',
  };
  private loginNewPassword: LoginNewPasswort = {
    email: '',
    password: '',
    passwordConfirm: '',
  };
  public siginUpStudent: siginUpStudent = {
    password: '',
    phone: '',
    name: '',
    email: '',
  };

  public siginUpTeacher: siginUpTeacher = {
    password: '',
    phone: '',
    name: '',
    email: '',
    lastname: '',
    fname: '',
    institution_id: 5,
  };

  public siginUpEducation: siginUpEdication = {
    educational_name: '',
    educational_address: '',
    email: '',
    phone: '',
    password: '',
    country_id: '12',
    educational_region: 5,
  };

  private siginUpCode: SiginUpCode = {
    code: '',
  };

  setLogin = (e: Event, key: keyof typeof this.login) => {
    this.login = {...this.login, [key]: e};
  };

  setLoginNewPassword = (e: Event, key: keyof typeof this.loginNewPassword) => {
    this.loginNewPassword = {
      ...this.loginNewPassword,
      [key]: e,
    };
  };

  setSignUpStudent = (e: Event, key: keyof typeof this.siginUpStudent) => {
    this.siginUpStudent = {...this.siginUpStudent, [key]: e};
  };

  setSignUpTeacher = (e: Event, key: keyof typeof this.siginUpTeacher) => {
    this.siginUpTeacher = {...this.siginUpTeacher, [key]: e};
  };

  setSignUpEducation = (e: Event, key: keyof typeof this.siginUpEducation) => {
    this.siginUpEducation = {...this.siginUpEducation, [key]: e};
  };

  setSignUpCode = (e: Event, key: keyof typeof this.siginUpCode) => {
    this.siginUpCode = {...this.siginUpCode, [key]: e};
  };
  get state() {
    return {
      login: this.login,
      loginNewPassword: this.loginNewPassword,
      siginUpStudent: this.siginUpStudent,
      signUpCode: this.siginUpCode,
    };
  }
}
