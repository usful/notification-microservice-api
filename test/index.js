const { NotificationService } = require('../dist');
console.log(NotificationService);
const notificationService = new NotificationService({API_PREFIX:'test'});

notificationService.getUser({userId:'101'});