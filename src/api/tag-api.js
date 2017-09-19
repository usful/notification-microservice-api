import command from '../helpers/command';
import { config } from '../config';

const partialUri = `${config.API_PREFIX}/tag`;

export default {
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
