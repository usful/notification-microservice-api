import command from '../helpers/command';
import config from '../config';

export default {
  getTag: async ({ tag }) => await command({ uri: `${config.API_PREFIX}/tag/${tag}`, method: 'GET' }),
  deleteTag: async ({ tag }) => await command({ uri: `${config.API_PREFIX}/tag/${tag}`, method: 'DELETE' }),
};
