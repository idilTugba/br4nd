"use client";

import { useEffect, useRef, useState } from "react";
import UploadImgToCanvas from "./UploadImgToCanvas";

interface CanvasResize {
  size: boolean;
  width: number;
  height: number;
}

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>();
  const [canvasResize, setCanvasResize] = useState<CanvasResize>({
    size: true,
    width: 550,
    height: 550,
  });

  const createCanvas = () => {
    if (canvasRef.current) {
      const content = canvasRef.current.getContext("2d");
      setCtx(content);
    }
  };

  const clearCanvas = () => {
    ctx?.clearRect(0, 0, canvasResize.width, canvasResize.height);
  };

  useEffect(() => {
    createCanvas();

    return () => createCanvas();
  }, []);

  useEffect(() => {
    setCanvasResize((canvasResize) => ({
      ...canvasResize,
      width: canvasResize.size ? 550 : 250,
      height: canvasResize.size ? 550 : 250,
    }));
  }, [canvasResize.size]);

  return (
    <>
      <canvas
        //   onClick={}
        width={canvasResize.width}
        height={canvasResize.width}
        style={{ border: "2px solid black", margin: "0 auto" }}
        ref={canvasRef}
      ></canvas>
      {ctx && (
        <UploadImgToCanvas props={{ ctx: ctx, canvasRef: canvasRef.current }} />
      )}
      <br />
      <button
        onClick={(e) =>
          setCanvasResize({ ...canvasResize, size: !canvasResize.size })
        }
      >
        Small / Big
      </button>
      <br />
      <button onClick={clearCanvas}>Clear Canvas</button>
    </>
  );
};

export default Canvas;
