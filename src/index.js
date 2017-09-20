import api from './api';
import { set as setConfig } from './config';

export class NotificationService {
  constructor(config) {
    if (config) {
      setConfig(config);
    }
    return api
  }
}
