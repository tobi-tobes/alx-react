import notifications from '../../notifications.json';
import { schema, normalize } from 'normalizr';

export function getAllNotificationsByUser(userId) {
  const contextList = [];

  for (const user of notifications) {
    if (user.author.id === userId) {
      contextList.push(user.context);
    }
  }

  return contextList;
}

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', { 
  author: user,
  context: message,
});

export const normalizedNotifications = normalize(notifications, [notification]);
