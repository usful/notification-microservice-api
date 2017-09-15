const command = require('../helpers/command');
const { config } = require('../config');

const partialUri = `${config.API_PREFIX}group`;

module.exports = {
  addUserToGroup: async ({ userId, group }) =>
    await command({
      uri: `${partialUri}/${userId}/${group}`,
      method: 'POST'
    }),
  getGroup: async ({ group }) =>
    await command({ uri: `${partialUri}/${group}`, method: 'GET' }),
  removeUserFromGroup: async ({ userId, group }) =>
    await command({
      uri: `${partialUri}/${userId}/${group}`,
      method: 'DELETE'
    })
};
