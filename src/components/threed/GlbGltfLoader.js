import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF(`${props.path}`);
  return <primitive object={scene} scale={props.scale} />;
}

export default function GlbGltfLoader(props) {
  return (
    <Canvas id={props?.path} pixelRatio={[1, 1]}>
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Model path={props?.path} scale={props?.scale} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
