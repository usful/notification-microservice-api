import command from '../helpers/command';
import { config } from '../config';

const partialUri = `${config.API_PREFIX}/user`;

export default {
  createUser: async ({ user }) => {
    return await command({ uri: partialUri, body: user, method: 'POST' });
  },
  updateUser: async ({ userId, update }) => {
    return await command({
      uri: `${partialUri}/${userId}`,
      body: update,
      method: 'PUT'
    });
  },
  getUser: async ({ userId }) => {
    return await command({ uri: `${partialUri}/${userId}`, method: 'GET' });
  },
  deleteUser: async ({ userId }) => {
    return await command({ uri: `${partialUri}/${userId}`, method: 'DELETE' });
  }
};
