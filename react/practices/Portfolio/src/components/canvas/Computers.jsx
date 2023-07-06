import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
      />
    </mesh>
  );
};

const ComputersCanvas = ()=>{
  return(
    <canvas frameLoop = "demand" shadows camera = {{position: [20, 3, 5], fov: 25}} gl = {{preserveDrawingBuffer: true}}>
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom = {false}
        maxPolarAngle={Math.PI / 2}
        //these maxPolarAngle and minPolarAngle values allows us to fixed the rotation through horizontal axis only 
        minPolarAngle={Math.PI / 2}
      />
      <Computers />
    </Suspense>
    <Preload all />
  </canvas>
  );

};

export default ComputersCanvas;


// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Computers = () => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor='black' />
//       <pointLight intensity={1} />
//       <primitive
//         object={computer.scene}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   return (
//     <Canvas
//       frameloop='demand'
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;