import notifications from '../../dist/notifications.json';
import { schema, normalize } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', { 
  author: user,
  context: message,
});

export const normalizedNotifications = normalize(notifications, [notification]);

export function getAllNotificationsByUser(userId) {
  const contextList = [];
  const messages = normalizedNotifications.entities.messages;

  for (const user of notifications) {
    if (user.author.id === userId) {
      const message = messages[user.context.guid];
      contextList.push(message);
    }
  }

  return contextList;
}

export function notificationsNormalizer(data) {
  return normalize(data, [notification]);
}
