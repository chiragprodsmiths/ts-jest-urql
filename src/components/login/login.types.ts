export type FormData = {
  userName: string;
  password: string;
};

export type LoginResponse = {
  login: {
    token: string;
  };
};

export enum UserNameErrorMessages {
  REQUIRED = 'Please enter email',
  VALID = 'Please enter valid email',
}

export enum PasswordErrorMessages {
  REQUIRED = 'Please enter password',
}
