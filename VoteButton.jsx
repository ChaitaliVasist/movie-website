import React, { useContext } from 'react';
import { NotificationContext } from './NotificationContext';

const VoteButton = ({ movieId, onVoteChange }) => {
  const { addNotification } = useContext(NotificationContext);

  const handleVoteChange = (change) => {
    onVoteChange(change);
    addNotification(`Vote for movie ${movieId} changed by ${change}`);
  };

  return (
    <div>
      <button onClick={() => handleVoteChange(1)}>Upvote</button>
      <button onClick={() => handleVoteChange(-1)}>Downvote</button>
    </div>
  );
};

export default VoteButton;
