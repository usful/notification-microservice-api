import command from '../helpers/command';
import { config } from '../config';

const partialUri = `${config.API_PREFIX}/template`;

export default {
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
