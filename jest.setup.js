module.exports = {
    testEnvironment: 'jsdom',
    coverageDirectory: 'Picaro/Tests/coverage',
    verbose: false,
    watchPathIgnorePatterns: [
        '<rootDir>/Picaro/Dist/',
        '<rootDir>/node_modules/',
        '<rootDir>/Picaro/Tests',
    ],
    setupFiles: ['<rootDir>/jest.setup.js'],
    moduleFileExtensions: ['js', 'json', 'vue'],
    moduleNameMapper: {
        '^@store/(.*)$': '<rootDir>/Picaro/Store/$1',
        '^@components/(.*)$': '<rootDir>/Picaro/Ui/components/$1',
        '~/(.*)': '<rootDir>/$1',
    },
    transform: {
        '.*\\.(js)$': 'babel-jest',
        '.*\\.(vue)$': 'vue-jest',
    },
}
