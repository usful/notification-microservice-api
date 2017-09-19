const api = require('./api');
const { set } = require('./config');

class NotificationService {

  constructor(config) {
    if (config) {
      set(config);
    }
    return api
  }
}

module.exports = NotificationService;