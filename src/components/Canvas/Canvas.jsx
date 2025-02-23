import { useEffect, useRef } from "react"
import { paint } from "./paint";

export const CanvasComp = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        paint(canvasRef.current);
    }, []);

    return <canvas ref={canvasRef} />;
}