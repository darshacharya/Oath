import React from 'react';

const OathPopup = ({ count, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>×</span>
        <p>Oath Text Here</p>
        <p>Number of people who have taken the oath: {count}</p>
      </div>
    </div>
  );
};

export default OathPopup;
