import React from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function Castle(props) {
	const { scene } = useGLTF("/models/castle.glb");

	return (
		<>
			<OrbitControls
				enableZoom={false}
				enablePan={false}
				enableRotate={false}
			/>
			<primitive
				object={scene}
				position={[0, -3, -5]}
				scale={0.22}
				rotation={[-Math.PI / 32, -Math.PI, 0]}
				{...props}
			/>
		</>
	);
}
