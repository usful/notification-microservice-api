import command from '../helpers/command';
import config from '../config';

export default {
  addWebHook: async ({ webhook }) => {
    return await command({ uri: `${config.API_PREFIX}/webhook`, body: webhook, method: 'POST' });
  },
  removeWebHook: async ({ url }) => {
    return await command({ uri: `${config.API_PREFIX}/webhook/${url}`, method: 'DELETE' });
  },
  getWebHook: async ({ url }) => {
    return await command({ uri: `${config.API_PREFIX}/webhook/${url}`, method: 'GET' });
  },
  getAllWebHooks: async ({ url }) => {
    return await command({ uri: `${config.API_PREFIX}/webhook`, method: 'GET' });
  },
  updateWebHook: async ({ url, update }) => {
    return await command({
      uri: `${config.API_PREFIX}/webhook/${url}`,
      body: update,
      method: 'PUT',
    });
  },
};
