export type Vector = {
    x: number;
    y: number;
  };
  
  export type Paddle = {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  
  export type Ball = {
    position: Vector;
    velocity: Vector;
    speed: number;
    radius: number;
  };
  
  const MAX_BOUNCE_ANGLE = (5 * Math.PI) / 12; // 75 degrees
  
  export function updateBallPosition(ball: Ball) {
    ball.position.x += ball.velocity.x;
    ball.position.y += ball.velocity.y;
  }
  
  export function checkWallCollision(ball: Ball, canvasHeight: number) {
    if (ball.position.y - ball.radius < 0 || ball.position.y + ball.radius > canvasHeight) {
      ball.velocity.y *= -1;
    }
  }
  
  export function checkPaddleCollision(ball: Ball, paddle: Paddle, isLeft: boolean) {
    const withinY =
      ball.position.y + ball.radius > paddle.y &&
      ball.position.y - ball.radius < paddle.y + paddle.height;
  
    const hittingLeft =
      isLeft &&
      ball.position.x - ball.radius <= paddle.x + paddle.width &&
      ball.position.x > paddle.x;
  
    const hittingRight =
      !isLeft &&
      ball.position.x + ball.radius >= paddle.x &&
      ball.position.x < paddle.x + paddle.width;
  
    if (withinY && (hittingLeft || hittingRight)) {
      const paddleCenterY = paddle.y + paddle.height / 2;
      const relativeIntersectY = paddleCenterY - ball.position.y;
      const normalized = relativeIntersectY / (paddle.height / 2);
      const bounceAngle = normalized * MAX_BOUNCE_ANGLE;
  
      const direction = isLeft ? 1 : -1;
  
      ball.velocity.x = direction * ball.speed * Math.cos(bounceAngle);
      ball.velocity.y = ball.speed * -Math.sin(bounceAngle);
    }
  }

  export function spawnBall(canvasWidth: number, canvasHeight: number): Ball {
    return {
      position: { x: canvasWidth / 2, y: canvasHeight / 2 },
      velocity: { x: 5, y: 3 }, 
      speed: 5,
      radius: 10
    };
  }

