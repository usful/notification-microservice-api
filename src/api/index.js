import UserApi from './user-api';
import GroupApi from './group-api';
import NotificationApi from './notification-api';
import TemplateApi from './template-api';
import TagApi from './tag-api';
import WebHookApi from './webhook-api';

export default {
  createUser: UserApi.createUser,
  updateUser: UserApi.updateUser,
  getUser: UserApi.getUser,
  deleteUser: UserApi.deleteUser,
  addUserToGroup: UserApi.addUserToGroup,
  removeUserFromGroup: UserApi.removeUserFromGroup,
  addTagToUser: UserApi.addTagToUser,
  removeTagFromUser: UserApi.removeTagFromUser,

  deleteGroup: GroupApi.deleteGroup,
  getGroup: GroupApi.getGroup,

  createNotification: NotificationApi.createNotification,
  removeNotification: NotificationApi.removeNotification,
  updateNotification: NotificationApi.updateNotification,
  getNotification: NotificationApi.getNotification,
  getUserNotifications: NotificationApi.getUserNotifications,
  getUnsentNotifications: NotificationApi.getUnsentNotifications,

  deleteTag: TagApi.deleteTag,
  getTag: TagApi.getTag,

  createTemplate: TemplateApi.createTemplate,
  updateTemplate: TemplateApi.updateTemplate,
  removeTemplate: TemplateApi.removeTemplate,
  getTemplate: TemplateApi.getTemplate,

  addWebHook: WebHookApi.addWebHook,
  removeWebHook: WebHookApi.removeWebHook,
  getWebHook: WebHookApi.getWebHook,
  getAllWebHooks: WebHookApi.getAllWebHooks,
  updateWebHook: WebHookApi.updateWebHook,
};
