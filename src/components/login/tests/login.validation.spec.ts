import { validationSchema } from '../login.validation';

/**
 * TODO: test valid schema pending as yup has some issues with isValid function
 * ask @ujwal to look into it
 */
describe('Login Schema Validation', () => {
  test('accepts invalid schema', async () => {
    const loginObj = {
      email: '',
      password: '',
    };
    const isValid = await validationSchema.isValid(loginObj, { abortEarly: false });
    expect(isValid).toBeFalsy();
  });
  // test('accepts valid schema', async () => {
  //   const loginObj = {
  //     userName: '',
  //     password: '',
  //   };
  //   const isValid = await validationSchema.isValid(loginObj, { abortEarly: false });
  //   expect(isValid).toBeTruthy();
  // });
  test('invalid username & password', async () => {
    const loginObj = {
      userName: '',
      password: '',
    };
    try {
      await validationSchema.validate(loginObj, { abortEarly: false });
    } catch (error) {
      expect(error).toBeDefined();
      expect(error).toHaveProperty('errors');
      expect(error.errors).toHaveLength(2);
    }
  });
  test('invalid username', async () => {
    const loginObj = {
      userName: 'chirag',
      password: 'chirag',
    };
    try {
      await validationSchema.validate(loginObj);
    } catch (error) {
      expect(error).toBeDefined();
      expect(error).toHaveProperty('errors');
      expect(error.errors).toHaveLength(1);
      expect(error.path).toEqual('userName');
    }
  });
  test('invalid password', async () => {
    const loginObj = {
      userName: 'chirag@prodsmiths.com',
      password: '',
    };
    try {
      await validationSchema.validate(loginObj);
    } catch (error) {
      expect(error).toBeDefined();
      expect(error).toHaveProperty('errors');
      expect(error.errors).toHaveLength(1);
      expect(error.path).toEqual('password');
    }
  });
});
