import command from '../helpers/command';
import config from '../config';

export default {
  createTemplate: async ({ template }) => {
    return await command({ uri: `${config.API_PREFIX}/template`, body: template, method: 'POST' });
  },
  updateTemplate: async ({ templateId, template }) => {
    return await command({
      uri: `${config.API_PREFIX}/template/${templateId}`,
      body: template,
      method: 'PUT',
    });
  },
  removeTemplate: async ({ templateId }) => {
    return await command({
      uri: `${config.API_PREFIX}/template/${templateId}`,
      method: 'DELETE',
    });
  },
  getTemplate: async ({ templateId }) => {
    return await command({ uri: `${config.API_PREFIX}/template/${templateid}`, method: 'GET' });
  },
};
