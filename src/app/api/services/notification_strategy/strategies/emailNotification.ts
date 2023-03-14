import NotificationStrategy from '../notificationInterface'

class EmailNotification implements NotificationStrategy {
  sendNotification(message: string) {
    // Logic for sending email notification
    return true
  }
}

export default EmailNotification
