import React from 'react';

const FishCaughtListItem = ({ fishType, weight }) => (
  <div>
  <p>{fishType}: {weight}</p>

  </div>
);

export default FishCaughtListItem;
