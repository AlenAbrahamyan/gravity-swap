import {useEffect, useRef} from "react";
import {Game} from "./game";
import * as PIXI from "pixi.js";

export const GameContainer = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const game = new Game(containerRef.current);
        return () => game.destroy(true);
    }, []);

    return <div className="canvas-container" ref={containerRef}>
        {PIXI.isMobile.phone ? <div className={'mobile-controller'}>
            <div className={'left-side'}>
                <div className={'mobile-controller-item'}
                     onTouchStart={() => window.dispatchEvent(new CustomEvent('keydown', {detail: {code: "ArrowUp"}}))}
                >{'J'}</div>
                <div className={'mobile-controller-item'}
                     onTouchStart={() => window.dispatchEvent(new CustomEvent('keydown', {detail: {key: "ArrowLeft"}}))}
                     onTouchEnd={() => window.dispatchEvent(new CustomEvent('keyup', {detail: {key: "ArrowLeft"}}))}
                     onTouchCancel={() => window.dispatchEvent(new CustomEvent('keyup', {detail: {key: "ArrowLeft"}}))}
                >{'<'}</div>
            </div>
            <div className={'right-side'}>
                <div className={'mobile-controller-item'}
                     onTouchStart={() => window.dispatchEvent(new CustomEvent('keydown', {detail: {code: "Space"}}))}>{'G'}</div>
                <div className={'mobile-controller-item'}
                     onTouchStart={() => window.dispatchEvent(new CustomEvent('keydown', {detail: {key: "ArrowRight"}}))}
                     onTouchEnd={() => window.dispatchEvent(new CustomEvent('keyup', {detail: {key: "ArrowRight"}}))}
                     onTouchCancel={() => window.dispatchEvent(new CustomEvent('keyup', {detail: {key: "ArrowRight"}}))}
                >{'>'}</div>
            </div>
        </div> : <></>}
    </div>;
};
