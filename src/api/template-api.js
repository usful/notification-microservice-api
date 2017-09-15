const command = require('../helpers/command');
const { config } = require('../config');

const partialUri = `${config.API_PREFIX}/template`;

module.exports = {
  createTemplate: async ({ template }) => {
    return await command({ uri: partialUri, body: template, method: 'POST' });
  },
  updateTemplate: async ({ templateId, template }) => {
    return await command({
      uri: `${partialUri}/${templateId}`,
      body: template,
      method: 'PUT'
    });
  },
  removeTemplate: async ({ templateId }) => {
    return await command({
      uri: `${partialUri}/${templateId}`,
      method: 'DELETE'
    });
  },
  getTemplate: async ({ templateId }) => {
    return await command({ uri: `${partialUri}/${templateid}`, method: 'GET' });
  }
};
