export type SiginUpPayloadStudent = {
  phone: string;
  password: string;
  name: string;
  email: string;
};

export type signUpTeacher = {
  name: string;
  lastName: string;
  Surname: string;
  phone: string;
  email: string;
  password: string;
  institution_id: string;
  sex: string;
};

export type siginUpEdication = {
  educational_name: string;
  educational_address: string;
  email: string;
  phone: string;
  password: string;
  country_id: string;
  educational_region: string;
};

export type siginUpRefresh = {
  phone: string;
};
export type SiginUpResponse = {
  message: string;
  data: any;
};
export type LoginPayload = {
  phone: string;
  password: string;
};
export type LoginResponse = {
  message: string;
  data: any;
};
