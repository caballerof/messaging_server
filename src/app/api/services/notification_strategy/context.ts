import NotificationStrategy from './notificationInterface'

class ContextNotification {
  private notificationStrategy: NotificationStrategy

  setNotificationStrategy(strategy: NotificationStrategy) {
    this.notificationStrategy = strategy
  }

  sendNotification(message: string) {
    return this.notificationStrategy.sendNotification(message)
  }
}

export default ContextNotification
