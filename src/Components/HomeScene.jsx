import React from "react";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import CresenceText from "./ParticalSystem";
import DesertGround from "../assets/DesertGround";
import Castle from "../assets/Castle";
import { OrbitControls } from "@react-three/drei";

export default function HomeScene() {
  return (
    <div className="deser-bg relative min-w-screen min-h-screen overflow-hidden">
      {/* UI Layer */}
      <Navbar />

      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Canvas camera={{ fov: 45, position: [0, 2, 10] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[1, 8, 5]} intensity={2} />

          <DesertGround />
          <Castle />
          <CresenceText/>
        </Canvas>
      </div>
    </div>
  );
}
