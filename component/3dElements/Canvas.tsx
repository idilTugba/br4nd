"use client";

import { Canvas } from "@react-three/fiber";

import Scene from "./Scene";

export default function ProductCanvas() {
  return (
    <div className="h-screen w-screen">
      <Canvas shadows>
        <Scene />
      </Canvas>
    </div>
  );
}
