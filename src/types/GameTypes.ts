export interface Position {
  x: number;
  y: number;
}

export interface Velocity {
  x: number;
  y: number;
}

export interface Ball {
  position: Position;
  velocity: Velocity;
  radius: number;
}

export interface Paddle {
  position: Position;
  width: number;
  height: number;
  speed: number;
}

export interface GameState {
  ball: Ball;
  leftPaddle: Paddle;
  rightPaddle: Paddle;
  leftScore: number;
  rightScore: number;
  isPlaying: boolean;
}
