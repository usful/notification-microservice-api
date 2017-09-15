const command = require('../helpers/command');
const { config } = require('../config');

module.exports = function() {
  const partialUri = `${config.API_PREFIX}group`;
  return {
    addUserToGroup: async ({ userId, group }) => {
      return await command({ uri: `${partialUri}/${userId}/${group}`, method: 'POST' });
    },
    getGroup: async ({ group }) => {
      return await command({ uri: `${partialUri}/${group}`, method: 'GET' });
    },
    removeUserFromGroup: async ({ userId, group }) => {
      return await command({ uri: `${partialUri}/${userId}/${group}`, method: 'DELETE' });
    },
  };
};
