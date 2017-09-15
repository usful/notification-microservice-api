const command = require('../helpers/command');
const { config } = require('../config');

const partialUri = `${config.API_PREFIX}/notification`;

module.exports = {
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
