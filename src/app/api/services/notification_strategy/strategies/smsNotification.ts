import NotificationStrategy from '../notificationInterface'

class SMSNotification implements NotificationStrategy {
  sendNotification(message: string) {
    // Logic for sending SMS notification

    return true
  }
}

export default SMSNotification
