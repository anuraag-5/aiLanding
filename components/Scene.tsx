"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";
import { RefObject } from "react";
type SceneProps = {
  canvasRef: RefObject<HTMLCanvasElement | null>;
};

const Scene = ({ canvasRef }: SceneProps) => {
  return (
    <Canvas className="bg-black" ref={canvasRef}>
      <Environment preset="city"/>
      <directionalLight color={"#e89f6b"} intensity={3} position={[0, 3, 2]}/>
        <Model />
    </Canvas>
  )
}

export default Scene;