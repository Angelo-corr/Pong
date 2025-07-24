// Main area where the game draws.
import React,{ useState, useEffect, useRef } from 'react';
import { spawnBall } from '../utils/physicsEngine';
import type { Ball } from '../utils/physicsEngine';
import { updateBallPosition, checkWallCollision } from '../utils/physicsEngine';

const GameCanvas: React.FC = () => {
  const [ball, setBall] = useState<Ball>(spawnBall(800, 600));
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      setBall(prev => {
        const newBall = {...prev};
        updateBallPosition(newBall);
        checkWallCollision(newBall, 600);
        
        const leftBoundary = window.innerWidth * 0.02;
        const rightBoundary = window.innerWidth * 0.98;

        if (newBall.position.x <= leftBoundary || newBall.position.x >= rightBoundary) {
          return spawnBall(800, 600); 
        }

        return newBall
      });
      requestRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [])
  
  return (
    <div style={{
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        left: `${ball.position.x}px`,
        top: `${ball.position.y}px`,
        width: `${ball.radius * 2}px`,
        height: `${ball.radius * 2}px`,
        backgroundColor: 'white',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)'
      }}
      />
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