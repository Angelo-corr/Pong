import { useEffect } from "react";
import type { Ball } from "../utils/physicsEngine";

export const useGameLoop = (ball: Ball, setBall: (ball: Ball) => void) => {
    useEffect(() => {
      const gameLoop = () => {
        setBall({...ball}); // Trigger re-render
        requestAnimationFrame(gameLoop);
      };
      gameLoop();
    }, [ball]);
  };

