"use client";

import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { HTMLMesh } from 'three/examples/jsm/Addons.js';

const Model = () => {
  const mesh1 = useRef<HTMLMesh | null>(null);
  const mesh2 = useRef<HTMLMesh | null>(null);
  const { viewport } = useThree();
  const { nodes: RigidCircle } = useGLTF("/objects3d/Sphere.glb");

  useFrame(() => {
    mesh1.current!.rotation.y += 0.01;
    mesh2.current!.rotation.y += 0.01;
    mesh1.current!.rotation.x += 0.01;
    mesh2.current!.rotation.x += 0.01;
  });

  const materialProps = {
    roughness: 0.50,
    thickness: 0.60,
    transmission: 1,
    ior: 1.2,
    backside: true,
    chromaticAberration: 0.02,
    color: "white"
  }

  return (
    // Todo: Conditionally set size of Sphere using windows.innerWidth
    <group>
      {/* <OrbitControls /> */}
        <mesh { ...RigidCircle.Sphere } ref={mesh1} position={[0, 0, 0]} scale={ viewport.width / 23}>
            <MeshTransmissionMaterial { ...materialProps } transmission={0.50} />
        </mesh>
        <mesh { ...RigidCircle.Sphere } ref={mesh2} position={[0, 0, 0]} scale={ viewport.width / 16 }>
            <MeshTransmissionMaterial {...materialProps} roughness={0.20} thickness={0.2} ior={1.5} />
        </mesh>
    </group>
  )
}

export default Model