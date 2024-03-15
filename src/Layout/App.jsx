import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ShaderSphere } from "../components/Shadershpere";

export const App = () => {
  return (
    <Canvas>
      <pointLight position={[5, 5, 5]} />
      <ShaderSphere />
      <OrbitControls />
      {/* <Stats /> */}
    </Canvas>
  );
};
