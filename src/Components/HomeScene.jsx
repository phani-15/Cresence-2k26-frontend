import React from 'react'
import Navbar from './Navbar'
import CresenceText from "./ParticalSystem";
import { Canvas, useThree } from "@react-three/fiber";
import Text from './SimpleModel'

function OrthographicCamera() {
  const { camera, size } = useThree();

  React.useEffect(() => {
    camera.near = 0.01;
    camera.far = 1000;
    camera.left = size.width / -2;
    camera.right = size.width / 2;
    camera.top = size.height / 2;
    camera.bottom = size.height / -2;
    camera.position.set(0, 0, 1);
    camera.updateProjectionMatrix();
  }, [camera, size]);

  return null;
}

export default function HomeScene() {
  return (
    <div className='desert-bg min-w-screen min-h-screen'>
      <Navbar />
      <div className="absolute top-0 left-0 w-full h-full z-0 lg:block">
        <Canvas
          orthographic
          camera={{ zoom: 120, position: [0, 0, 10] }}
          >
          <ambientLight intensity={2} />
          <directionalLight position={[0, 0, 10]} intensity={3} />

          <CresenceText />
        </Canvas>

      </div>
    </div>
  )
}
