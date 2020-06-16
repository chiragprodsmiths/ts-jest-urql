import * as yup from 'yup';
import { FormData } from './types';

export const validationSchema = yup
  .object<FormData>({
    name: yup.string().defined(),
    email: yup.string().defined().email(),
    organization: yup.string().defined().min(5),
    title: yup.string().required(),
  })
  .defined();
