// Update with your config settings.

module.exports = {
  development :  {
    client : 'mysql',
    connection : {
      host : process.env.HOST,
      user : process.env.USER_DB,
      password : process.env.PASSWORD_DB,
      database : forummodels
    }
  }
};
