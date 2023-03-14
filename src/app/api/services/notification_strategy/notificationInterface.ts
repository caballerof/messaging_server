interface NotificationStrategy {
  sendNotification(message: string): boolean
}

export default NotificationStrategy
