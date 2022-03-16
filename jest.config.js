module.exports = {
    moduleNameMapper: {
        "^@env/(.*)$": "<rootDir>/src/environments/$1",
        "^@service/(.*)$": "<rootDir>/src/app/services/$1",
        "^@module/(.*)$": "<rootDir>/src/app/modules/$1",
        "^@plugin/(.*)$": "<rootDir>/src/app/plugins/$1",
        "^@interface/(.*)$": "<rootDir>/src/app/interfaces/$1",
        "^@data/(.*)$": "<rootDir>/src/app/data/$1"

    },
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    transformIgnorePatterns: ['node_modules/(?!(jest-test|@ngrx))'],
};
