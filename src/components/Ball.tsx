import React from "react";

const Ball: React.FC<{ x: number, y: number }> = ({ x, y }) => {
    return (
        <div
        style={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          backgroundColor: 'white',
          position: 'absolute',
          top: `${y}px`,
          left: `${x}px`
        }}
        />
    );
};

export default Ball