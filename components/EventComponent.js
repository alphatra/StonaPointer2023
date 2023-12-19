// components/EventComponent.js

import React from 'react';

const EventComponent = ({ imageUrl, eventName, eventLocation, frameColor }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <div style={{ marginRight: '20px', textAlign: 'left' }}>
        <h2 style={{ fontSize: '2em', margin: '0', marginBottom: '4px' }}>{eventName}</h2>
        <p style={{ color: '#888', fontSize: '1.2em', margin: '0', marginBottom: '8px' }}>{eventLocation}</p>
      </div>
      <img
        src={imageUrl}
        alt={eventName}
        style={{
          width: '150px',
          height: '150px',
          objectFit: 'cover',
          borderRadius: '10px', // Lekkie zaokrąglenie krawędzi
          border: `4px solid ${frameColor}`,
        }}
      />
    </div>
  );
};

export default EventComponent;
