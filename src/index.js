import api from './api';
import { setConfig } from './config';

export default class NotificationService {

  constructor(config) {
    if (config) {
      setConfig(config);
    }
    return api
  }
}
