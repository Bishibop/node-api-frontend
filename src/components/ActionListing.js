import React from 'react'

const ActionListing = ({ action }) => {
  return (
    <div> 
      <p><strong>{action.description}:</strong> {action.notes}</p>
    </div>
  );
}

export default ActionListing;
