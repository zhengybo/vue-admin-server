const md5 = require('js-md5');
module.exports = app => {
  return class User extends app.Service {
    async login(userId,password){
      const res = await app.mysql.get('user', {
          userId: userId
      })

      let really = !!(res && res.password == password);
      let token = '';
      if(really){
        token =  md5(userId + new Date());
        await app.mysql.update('user', {
          id : res.id,
          token:token
        });
      }
      return {
        really : really,
        token : token
      };
    }

    async getPermission(userId,token){
      console.log(userId,token,'-------------');
      const res = await app.mysql.get('user', {
          userId: userId
      })

      if(res.token !== token){
        return false
      }

      const permission = await app.mysql.query(`select GROUP_CONCAT(c.permissonId) as 'right' from (select a.userId,a.roleId,b.permissonId from (select userId,roleId from user_role  WHERE userId = ${userId}) a join role_permission b on a.roleId = b.roleId) c LIMIT 1`);

      return permission;

    }

    async getUserInfo(userId,token){
      console.log(userId,token,'-------------');
      const res = await app.mysql.get('user', {
          userId: userId
      })

      if(res.token !== token){
        return false
      }
      const permission = await app.mysql.query(`select GROUP_CONCAT(c.permissonId) as 'right' from (select a.userId,a.roleId,b.permissonId from (select userId,roleId from user_role  WHERE userId = ${userId}) a join role_permission b on a.roleId = b.roleId) c LIMIT 1`);
      const info = await app.mysql.query(`select * from userinfo WHERE userId = ${userId} LIMIT 1`);
      const permissHash = await app.mysql.query(`select permissionId,permissionRouter from permission`);
      let rights = permission[0].right.split(',').map(item => {
        return permissHash.find(list => list.permissionId == item).permissionRouter
      })
      return {
        data : {
          rights,
          ...info[0]
        }
      };
    }
  }
};
