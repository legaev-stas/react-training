module.exports = {
    verbose: true,
    moduleFileExtensions: [
        'js',
        'jsx'
    ],
    roots: ['src'],
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js'
    }
};