import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function RotatingIcosahedron() {
  const meshRef = useRef();
  const mesh2Ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15;
      meshRef.current.rotation.y = t * 0.2;
    }
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.x = -t * 0.1;
      mesh2Ref.current.rotation.y = t * 0.15;
      mesh2Ref.current.position.y = Math.sin(t * 0.5) * 0.3;
    }
  });

  return (
    <>
      {/* Main Icosahedron — golden yellow */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshBasicMaterial
          color="#F5C518"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Outer Icosahedron — white */}
      <mesh ref={mesh2Ref} position={[0, 0, 0]}>
        <icosahedronGeometry args={[2.5, 0]} />
        <meshBasicMaterial
          color="#FFFFFF"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Ambient glow point lights */}
      <pointLight position={[3, 3, 3]} color="#F5C518" intensity={0.8} />
      <pointLight position={[-3, -3, -3]} color="#FFFFFF" intensity={0.4} />
    </>
  );
}

export default function LoaderScene() {
  return (
    <Canvas
      className="loader-canvas"
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
    >
      <RotatingIcosahedron />
    </Canvas>
  );
}
