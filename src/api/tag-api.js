const command = require('../helpers/command');
const { config } = require('../config');

module.exports = function(){
  const partialUri = `${config.API_PREFIX}/tag`;
  return {
    addTagToUser: async ({ userId, tag }) => {
      return await command({ uri: `${partialUri}/${userId}/${tag}`, method: 'POST' });
    },
    getTag: async ({ tag }) => {
      return await command({ uri: `${partialUri}/${tag}`, method: 'GET' });
    },
    removeTagFromUser: async ({ userId, tag }) => {
      return await command({ uri: `${partialUri}/${userId}/${tag}`, method: 'DELETE' });
    },
  };
};
