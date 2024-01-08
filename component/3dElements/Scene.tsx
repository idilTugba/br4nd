"use client";

import React, { useEffect, useRef } from "react";
import { degToRad } from "three/src/math/MathUtils.js";
import { BackSide } from "three";
import {
  CameraControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";

import { Hoodie } from "./Hoodie";

const Scene = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!);

  useEffect(() => {
    cameraRef.current.lookAt(0, 0, 0);
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0.5, 1]} ref={cameraRef} />
      <CameraControls maxPolarAngle={degToRad(90)} />
      <Environment files="/models/sky.hdr" background />
      <Hoodie position={[0, -0.5, 0]} />
      {/* <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh> */}
      {/* <mesh rotation={[degToRad(90), 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="green" side={BackSide} />
      </mesh> */}
      <ambientLight intensity={1} />
      <spotLight position={[-1, 2, 4]} intensity={10} castShadow />
    </>
  );
};

export default Scene;
