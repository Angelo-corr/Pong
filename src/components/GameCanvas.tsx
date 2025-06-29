// Main area where the game draws.
import React from 'react';

const GameCanvas: React.FC = () => {
  return (
    <div style={{
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh',
      position: 'relative'
    }}>
      <div style={{
        borderLeft: '6px dashed white',
        height: '100vh',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)'
      }} />
      <div style={{
        borderLeft: '6px solid white',
        height: '90vh',
        position: 'absolute',
        left: '2%',
        top: '5%'
      }} />
      <div style={{
        borderRight: '6px solid white',
        height: '90vh',
        position: 'absolute',
        right: '2%',
        top: '5%'
      }} />
      <div style={{
        borderTop: '6px solid white',
        width: '96vw',
        position: 'absolute',
        top: '5%',
        right: '2%'
      }} />
      <div style={{
        borderBottom: '6px solid white',
        width: '96vw',
        position: 'absolute',
        bottom: '5%',
        left: '2%'
      }}
      />
    </div>
  );
};

export default GameCanvas;