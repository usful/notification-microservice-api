const command = require('../helpers/command');
const { config } = require('../config');

module.exports = function(){
  const partialUri = `${config.API_PREFIX}/user`;
  return {
    createUser: async ({user}) =>{
      return await command({ uri:partialUri, body: user, method: 'POST' });
    },
    updateUser: async ({ userId, update }) => {
      return await command({ uri: `${partialUri}/${userId}`, body: update, method: 'PUT' });
    },
    getUser: async ({ userId }) => {
      return await command({ uri: `${partialUri}/${userId}`, method: 'GET' });
    },
    deleteUser: async ({ userId }) => {
      return await command({ uri: `${partialUri}/${userId}`, method: 'DELETE' });
    },
  };
};