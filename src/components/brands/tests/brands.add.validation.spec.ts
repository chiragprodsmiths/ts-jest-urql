import { required, optional, optionalTwoDecimalNumbers } from '../brands.add.validation.common';

/**
 * TODO: test valid schema pending as yup has some issues with isValid function
 * ask @ujwal to look into it
 */
describe('Brands Add Schema Validation', () => {
  describe('Common Validations', () => {
    describe('required', () => {
      // it('accepts invalid schema', async () => {
      //   const isValid = await required('Required').isValid(1);
      //   expect(isValid).toBeFalsy();
      // });
      it('accepts valid schema', async () => {
        const isValid = await required('Required').isValid('');
        expect(isValid).toBeFalsy();
      });
      it('empty string not allowed', async () => {
        const message = 'required';
        try {
          await required(message).validate('');
        } catch (error) {
          expect(error).toBeDefined();
          expect(error).toHaveProperty('errors');
          expect(error.errors).toHaveLength(1);
          expect(error.message).toEqual(message);
        }
      });
    });

    describe('optional', () => {
      it('allows null', async () => {
        try {
          await optional.validate(null);
        } catch (error) {
          expect(error).toBeUndefined();
        }
      });
      it('undefined not allowed', async () => {
        try {
          await optional.validate(undefined);
        } catch (error) {
          expect(error).toBeDefined();
          expect(error).toHaveProperty('errors');
          expect(error.errors).toHaveLength(1);
        }
      });
    });

    describe('optional two decimal numbers', () => {
      it('undefined not allowed', async () => {
        try {
          await optionalTwoDecimalNumbers.validate(undefined);
        } catch (error) {
          expect(error).toBeDefined();
          expect(error).toHaveProperty('errors');
        }
      });
      it('strings not allowed', async () => {
        try {
          await optionalTwoDecimalNumbers.validate('invalid number');
        } catch (error) {
          expect(error).toBeDefined();
          expect(error).toHaveProperty('errors');
          expect(error.errors).toHaveLength(1);
        }
      });
      it('more than 2 decimal not allowed', async () => {
        try {
          await optionalTwoDecimalNumbers.validate(10.234);
        } catch (error) {
          expect(error).toBeDefined();
          expect(error).toHaveProperty('errors');
          expect(error.errors).toHaveLength(1);
        }
      });
      it('empty string allowed', async () => {
        try {
          await optionalTwoDecimalNumbers.validate('');
        } catch (error) {
          expect(error).toBeUndefined();
        }
      });
      it('null allowed', async () => {
        try {
          await optionalTwoDecimalNumbers.validate(null);
        } catch (error) {
          expect(error).toBeUndefined();
        }
      });
      it('whole number allowed', async () => {
        try {
          await optionalTwoDecimalNumbers.validate(10);
        } catch (error) {
          expect(error).toBeUndefined();
        }
      });
      it('one digit decimal number allowed', async () => {
        try {
          await optionalTwoDecimalNumbers.validate(10.1);
        } catch (error) {
          expect(error).toBeUndefined();
        }
      });
      it('2 digit decimal number', async () => {
        try {
          await optionalTwoDecimalNumbers.validate(10.12);
        } catch (error) {
          expect(error).toBeUndefined();
        }
      });
    });
  });
});
