import command from '../helpers/command';
import config from '../config';

export default {
  createUser: async ({ user }) => await command({ uri: `${config.API_PREFIX}/user`, body: user, method: 'POST' }),
  updateUser: async ({ userId, update }) =>
    await command({
      uri: `${config.API_PREFIX}/user/${userId}`,
      body: update,
      method: 'PUT',
    }),
  getUser: async ({ userId }) => await command({ uri: `${config.API_PREFIX}/user/${userId}`, method: 'GET' }),
  deleteUser: async ({ userId }) => await command({ uri: `${config.API_PREFIX}/user/${userId}`, method: 'DELETE' }),
  removeUserFromGroup: async ({ userId, group }) =>
    await command({
      uri: `${config.API_PREFIX}/user/${userId}/group/${group}`,
      method: 'DELETE',
    }),
  addUserToGroup: async ({ userId, group }) =>
    await command({
      uri: `${config.API_PREFIX}/user/${userId}/group/${group}`,
      method: 'POST',
    }),
  removeTagFromUser: async ({ userId, tag }) =>
    await command({ uri: `${config.API_PREFIX}/user/${userId}/tag/${tag}`, method: 'DELETE' }),
  addTagToUser: async ({ userId, tag }) =>
    await command({ uri: `${config.API_PREFIX}/user/${userId}/tag/${tag}`, method: 'POST' }),
};
