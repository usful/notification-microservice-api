import command from '../helpers/command';
import config from '../config';

export default {
  addUserToGroup: async ({ userId, group }) =>
    await command({
      uri: `${config.API_PREFIX}group/${userId}/${group}`,
      method: 'POST',
    }),
  getGroup: async ({ group }) => await command({ uri: `${config.API_PREFIX}group/${group}`, method: 'GET' }),
  removeUserFromGroup: async ({ userId, group }) =>
    await command({
      uri: `${config.API_PREFIX}group/${userId}/${group}`,
      method: 'DELETE',
    }),
};
