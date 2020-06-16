// const { pathsToModuleNameMapper } = require('ts-jest/utils');
// const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/tests/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/public/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.test.json',
    },
  },
  transform: {
    '^.+\\.css$': '<rootDir>/configs/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/configs/jest/fileTransform.js',
  },
  moduleDirectories: ['.', 'node_modules', 'src'],
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  // moduleNameMapper: {
  //   '\\.(jpg|jpeg|png|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/src/images',
  //   '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
  //   // 'images/(.*)': ['<rootDir>/src/images/$1'],
  // },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
