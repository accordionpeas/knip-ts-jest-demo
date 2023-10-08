const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  'rootDir': './',

  testEnvironment: 'node',

  roots: ['<rootDir>'],
  modulePaths: ['<rootDir>'],

  transform: {
    '^.+\\.(t|j)sx?$': ['ts-jest', { isolatedModules: true }],
  },

  testRegex: '/__tests__/.*.tsx?$',

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
