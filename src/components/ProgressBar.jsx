import React from "react";

export const ProgressBar = ({ bgcolor, completed }) => {
  const containerStyles = {
    width: '100%',
    height: '10px',
    background: (completed != 0 ) ? '#2D363D' : null,
    borderRadius: '10px',
    display: 'flex',
    justifyContent: (completed > 0 ) ? 'flex-end' : 'flex-start',
  }

  const fillerStyles = {
    height: '100%',
    width: `${Math.abs(completed)}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
      </div>
    </div>
  );
};


