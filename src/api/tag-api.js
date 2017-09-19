import command from '../helpers/command';
import config from '../config';

export default {
  addTagToUser: async ({ userId, tag }) => {
    return await command({ uri: `${config.API_PREFIX}/tag/${userId}/${tag}`, method: 'POST' });
  },
  getTag: async ({ tag }) => {
    return await command({ uri: `${config.API_PREFIX}/tag/${tag}`, method: 'GET' });
  },
  removeTagFromUser: async ({ userId, tag }) => {
    return await command({ uri: `${config.API_PREFIX}/tag/${userId}/${tag}`, method: 'DELETE' });
  },
};
