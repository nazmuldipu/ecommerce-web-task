module.exports = {
    preset: 'ts-jest',
    testEnvironment: "jsdom",
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__test__/__mocks__/fileMock.js',
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
};