"use client";

import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { HTMLMesh } from 'three/examples/jsm/Addons.js';

const Model = () => {
  const mesh1 = useRef<HTMLMesh | null>(null);
  const mesh2 = useRef<HTMLMesh | null>(null);
  const { viewport } = useThree();
  const { nodes: Sphere } = useGLTF("/objects3d/sphere-text.glb");
  const { nodes: Circle } = useGLTF("/objects3d/mball2.glb");

  useFrame(() => {
    mesh1.current!.rotation.y += 0.0055;
    mesh2.current!.rotation.y += 0.0055;
    mesh1.current!.rotation.x += 0.0055;
    mesh2.current!.rotation.x += 0.0055;
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
    <group>
        <mesh { ...Sphere.Sphere } ref={mesh1} position={[0, 0, 0]} scale={ viewport.width / 17}>
            <MeshTransmissionMaterial { ...materialProps } />
        </mesh>
        <mesh { ...Circle.Mball001 } ref={mesh2} position={[0, 0, 0]} scale={ viewport.width / 14 }>
            <MeshTransmissionMaterial {...materialProps} roughness={0.05} />
        </mesh>
    </group>
  )
}

export default Model