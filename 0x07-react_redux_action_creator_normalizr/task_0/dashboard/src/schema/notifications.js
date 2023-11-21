import notifications from '../../notifications.json';

export default function getAllNotificationsByUser(userId) {
  const contextList = [];

  for (const user of notifications) {
    if (user.author.id === userId) {
      contextList.push(user.context);
    }
  }

  return contextList;
}
