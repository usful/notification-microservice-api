import command from '../helpers/command';
import config from '../config';

export default {
  createNotification: async ({ notification }) => {
    return await command({
      uri: `${config.API_PREFIX}/notification`,
      body: notification,
      method: 'POST',
    });
  },
  removeNotification: async ({ notificationId }) => {
    return await command({
      uri: `${config.API_PREFIX}/notification/${notificationId}`,
      method: 'DELETE',
    });
  },
  updateNotification: async ({ notificationId, notification }) => {
    return await command({
      uri: `${config.API_PREFIX}/notification/${notificationId}`,
      body: notification,
      method: 'PUT',
    });
  },
  getNotification: async ({ notificationId }) => {
    return await command({
      uri: `${config.API_PREFIX}/notification/${notificationId}`,
      method: 'GET',
    });
  },
  getUserNotifications: async ({ userId, limit }) => {
    return await command({
      uri: `${config.API_PREFIX}/notification/sent`,
      body: { userId, limit },
      method: 'GET',
    });
  },
  getUnsentNotifications: async ({ userId, limit }) => {
    return await command({
      uri: `${config.API_PREFIX}/notification/sent`,
      body: { userId, limit },
      method: 'GET',
    });
  },
};
