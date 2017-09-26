import command from '../helpers/command';
import config from '../config';

export default {
  createNotification: async ({ notification }) =>
    await command({
      uri: `${config.API_PREFIX}/notification`,
      body: notification,
      method: 'POST',
    }),
  removeNotification: async ({ notificationId }) =>
    await command({
      uri: `${config.API_PREFIX}/notification/${notificationId}`,
      method: 'DELETE',
    }),
  updateNotification: async ({ notificationId, notification }) =>
    await command({
      uri: `${config.API_PREFIX}/notification/${notificationId}`,
      body: notification,
      method: 'PUT',
    }),
  getNotification: async ({ notificationId }) =>
    await command({
      uri: `${config.API_PREFIX}/notification/${notificationId}`,
      method: 'GET',
    }),
  getUserNotifications: async ({ userId, limit }) =>
    await command({
      uri: `${config.API_PREFIX}/notification/sent`,
      body: { userId, limit },
      method: 'GET',
    }),
  getUnsentNotifications: async ({ userId, limit }) =>
    await command({
      uri: `${config.API_PREFIX}/notification/sent`,
      body: { userId, limit },
      method: 'GET',
    }),
};
