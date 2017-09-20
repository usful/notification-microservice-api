import command from '../helpers/command';
import config from '../config';

export default {
  createUser: async ({ user }) => {
    return await command({ uri: `${config.API_PREFIX}/user`, body: user, method: 'POST' });
  },
  updateUser: async ({ userId, update }) => {
    return await command({
      uri: `${config.API_PREFIX}/user/${userId}`,
      body: update,
      method: 'PUT',
    });
  },
  getUser: async ({ userId }) => {
    return await command({ uri: `${config.API_PREFIX}/user/${userId}`, method: 'GET' });
  },
  deleteUser: async ({ userId }) => {
    return await command({ uri: `${config.API_PREFIX}/user/${userId}`, method: 'DELETE' });
  },
};
