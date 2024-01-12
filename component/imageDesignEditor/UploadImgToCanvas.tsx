"use client";
import React, { useState } from "react";

import { useAppSelector } from "@/lib/redux/Hooks";

interface UploadImgToCanvas {
  props: {
    ctx: CanvasRenderingContext2D | null;
    canvasRef: HTMLCanvasElement | null;
  };
}

interface imgResize {
  initialWidth: number;
  initialHeight: number;
  currentWidth: number;
  currentHeight: number;
  top: number;
  left: number;
}

const UploadImgToCanvas: React.FC<UploadImgToCanvas> = ({ props }) => {
  const { ctx, canvasRef } = props;
  const imageURL = useAppSelector((state) => state.image.image);
  const [imgResize, setImgResize] = useState<imgResize>({
    initialWidth: 0,
    initialHeight: 0,
    currentWidth: 0,
    currentHeight: 0,
    top: 0,
    left: 0,
  });

  const handleStroke = () => {
    if (canvasRef && imageURL) {
      const cord = canvasRef.getBoundingClientRect();

      const img = new Image();
      img.src = imageURL;

      img.onload = () => {
        let imgWidthToScale: number;
        let imgHeightToScale: number;
        if (img.width > img.height) {
          imgWidthToScale = cord.width;
          imgHeightToScale = (imgWidthToScale * img.height) / img.width;
        } else {
          imgHeightToScale = cord.height;
          imgWidthToScale = (imgHeightToScale * img.width) / img.height;
        }

        setImgResize({
          ...imgResize,
          initialWidth: img.width,
          currentWidth: imgWidthToScale,
          initialHeight: img.height,
          currentHeight: imgHeightToScale,
        });

        ctx?.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          0,
          0,
          imgWidthToScale,
          imgHeightToScale
        );
      };
    }
  };

  return <button onClick={handleStroke}>Resmi Yükle</button>;
};

export default UploadImgToCanvas;
