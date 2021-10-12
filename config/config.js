module.exports = {
  environment: 'dev',
  database: {
    dbName: 'boblog',
    host: 'home.greatjs.top',
    port: 3306,
    user: 'root',
    password: 'ljd@123456'
  },
  security: {
    secretKey: "secretKey",
    // 过期时间 1小时
    expiresIn: 60 * 60
  }
}
