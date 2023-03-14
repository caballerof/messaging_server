import NotificationStrategy from './notificationInterface'

class PushNotification implements NotificationStrategy {
  sendNotification(message: string) {
    // Logic for sending push notification
  }
}

export default PushNotification
