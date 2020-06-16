import { sayHello } from './app.service';

describe('This is a simple test', () => {
  test('Check the sayHello function', () => {
    expect(sayHello('Chirag')).toEqual('Welcome to Arthify Chirag');
  });
});
