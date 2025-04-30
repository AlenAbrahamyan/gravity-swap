import {useEffect, useRef} from "react";
import {Game} from "./game";

export const GameContainer = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const game = new Game(containerRef.current);
        return () => game.destroy(true);
    }, []);

    return <div className="canvas-container" ref={containerRef}></div>;
};
