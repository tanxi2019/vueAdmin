var isPro = process.env.NODE_ENV === 'production'; // process.env.NODE_ENV用于区分是生产环境还是开发环境

module.exports = { // 根据环境不同导出不同的baseURL
  baseURL: isPro ? 'http://locahost:3000/' : '/api'
};
