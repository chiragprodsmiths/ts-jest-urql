import * as yup from 'yup';
import { FormData, UserNameErrorMessages, PasswordErrorMessages } from './login.types';

export const validationSchema = yup
  .object<FormData>({
    userName: yup.string().required(UserNameErrorMessages.REQUIRED).email(UserNameErrorMessages.VALID).defined(),
    password: yup.string().required(PasswordErrorMessages.REQUIRED).defined(),
  })
  .defined();
