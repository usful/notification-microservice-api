import command from '../helpers/command';
import { config } from '../config';

const partialUri = `${config.API_PREFIX}group`;

export default {
  addUserToGroup: async ({ userId, group }) =>
    await command({
      uri: `${partialUri}/${userId}/${group}`,
      method: 'POST'
    }),
  getGroup: async ({ group }) =>
    await command({ uri: `${partialUri}/${group}`, method: 'GET' }),
  removeUserFromGroup: async ({ userId, group }) =>
    await command({
      uri: `${partialUri}/${userId}/${group}`,
      method: 'DELETE'
    })
};
