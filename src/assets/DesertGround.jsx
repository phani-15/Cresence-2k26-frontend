import React from "react";
import { useTexture } from "@react-three/drei";

export default function DesertBackground() {
  const texture = useTexture("/images/desert-bg.png");

  return (
    <mesh position={[0, -10, -30]}>
      <planeGeometry args={[80, 40]} />
      <meshBasicMaterial
        map={texture}
        transparent={false}
      />
    </mesh>
  );
}
