import command from '../helpers/command';
import { config } from '../config';

const partialUri = `${config.API_PREFIX}/notification`;

export default {
  createNotification: async ({ notification }) => {
    return await command({
      uri: partialUri,
      body: notification,
      method: 'POST'
    });
  },
  removeNotification: async ({ notificationId }) => {
    return await command({
      uri: `${partialUri}/${notificationId}`,
      method: 'DELETE'
    });
  },
  updateNotification: async ({ notificationId, notification }) => {
    return await command({
      uri: `${partialUri}/${notificationId}`,
      body: notification,
      method: 'PUT'
    });
  },
  getNotification: async ({ notificationId }) => {
    return await command({
      uri: `${partialUri}/${notificationId}`,
      method: 'GET'
    });
  },
  getUserNotifications: async ({ userId, limit }) => {
    return await command({
      uri: `${partialUri}/sent`,
      body: { userId, limit },
      method: 'GET'
    });
  },
  getUnsentNotifications: async ({ userId, limit }) => {
    return await command({
      uri: `${partialUri}/sent`,
      body: { userId, limit },
      method: 'GET'
    });
  }
};
