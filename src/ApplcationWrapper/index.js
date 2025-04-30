import {useEffect, useRef} from "react";

export const ApplicationWrapper = ({ children }) => {
    const wrapperRef = useRef(null);

    const scaleApp = () => {
        const baseWidth = 1920;
        const baseHeight = 1080;
        const scaleX = window.innerWidth / baseWidth;
        const scaleY = window.innerHeight / baseHeight;
        const scale = Math.min(scaleX, scaleY);

        const left = (window.innerWidth - baseWidth * scale) / 2;
        const top = (window.innerHeight - baseHeight * scale) / 2;

        if (wrapperRef.current) {
            wrapperRef.current.style.transform = `scale(${scale})`;
            wrapperRef.current.style.position = 'absolute';
            wrapperRef.current.style.left = `${left}px`;
            wrapperRef.current.style.top = `${top}px`;
            wrapperRef.current.style.transformOrigin = 'top left';
        }
    };

    useEffect(() => {
        scaleApp();
        window.addEventListener('resize', scaleApp);
        return () => window.removeEventListener('resize', scaleApp);
    }, []);

    return (
        <div ref={wrapperRef} className="application-wrapper">
            {children}
        </div>
    );
};