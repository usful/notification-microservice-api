import command from '../helpers/command';
import config from '../config';

export default {
  getGroup: async ({ group }) => await command({ uri: `${config.API_PREFIX}/group/${group}`, method: 'GET' }),
  deleteGroup: async({ group }) => await command( {uri: `${config.API_PREFIX}/group/${group}`, method: 'DELETE'}),
};
