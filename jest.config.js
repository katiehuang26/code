const config = {
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
    },
    maxWorkers: 1,
    setupFiles: ['./test/setup']
};
  
module.exports = config;