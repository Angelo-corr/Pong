import React, { useRef, useEffect } from 'react';

let height = 16

const RightPaddle: React.FC = () => {
    const position = useRef(42);
    const keysPressed = useRef<{ [key: string]: boolean }>({});
    const paddleRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            keysPressed.current[e.key.toLowerCase()] = true;
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            keysPressed.current[e.key.toLowerCase()] = false;
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    useEffect(() => {
        let animationId: number;

        const update = () => {
            let pos = position.current;

            if (keysPressed.current['p'] && pos > 6) {
                pos -= 1;
            }

            if (keysPressed.current['l'] && pos < 78) {
                pos += 1;
            }

            position.current = pos;

            if (paddleRef.current) {
                paddleRef.current.style.top = `${pos}%`;
            }

            animationId = requestAnimationFrame(update);
        };

        animationId = requestAnimationFrame(update);
        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <div 
            ref={paddleRef}
            style={{
                borderLeft: '6px solid white',
                height: `${height}vh`,
                position: 'absolute',
                right: '5%',
                top: `${position}%`
            }}
        />
    );
};

export default RightPaddle
