import React, { useContext } from 'react';
import { NotificationContext } from './NotificationContext';

const Notification = () => {
  const { notifications } = useContext(NotificationContext);

  return (
    <div>
      {notifications.map((notification, index) => (
        <div key={index}>{notification}</div>
      ))}
    </div>
  );
};

export default Notification;
