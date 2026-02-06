import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

const MinimalTextModel = () => {
    const { scene } = useGLTF("/models/fontforweborg copy.glb");
    
    return (
        <Canvas camera={{ position: [0, 0, 3] }} style={{ height: "100vh", background: "black" }}>
            <ambientLight intensity={1} />
            <directionalLight position={[2, 2, 4]} intensity={2} />
            <primitive object={scene} scale={1.5} />
            <OrbitControls />
        </Canvas>
    );
};

export default MinimalTextModel;
