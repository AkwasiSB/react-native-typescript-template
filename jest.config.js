const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  cacheDirectory: '.jest/cache',
  coverageDirectory: 'coverage',
  globals: {
    'ts-jest': {
      babelConfig: true,
    }
  },
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^/(.*)$': '<rootDir>/src/$1',
    '^tests/(.*)$': '<rootDir>/tests/$1',
  },
  transform: {
    ...tsjPreset.transform,
    '\\.js$': 'babel-jest'
  },
  verbose: true,
};
