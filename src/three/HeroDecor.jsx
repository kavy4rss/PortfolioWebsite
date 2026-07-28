import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function FloatingShapes() {
  const group = useRef();
  const torus = useRef();
  const octahedron = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = t * 0.05;
    }
    if (torus.current) {
      torus.current.rotation.x = t * 0.3;
      torus.current.rotation.z = t * 0.2;
      torus.current.position.y = Math.sin(t * 0.7) * 0.3;
    }
    if (octahedron.current) {
      octahedron.current.rotation.x = t * 0.2;
      octahedron.current.rotation.y = t * 0.3;
      octahedron.current.position.y = Math.cos(t * 0.5) * 0.2;
    }
  });

  return (
    <group ref={group}>
      {/* Torus ring — golden yellow */}
      <mesh ref={torus} position={[1.5, 0, -1]}>
        <torusGeometry args={[0.6, 0.08, 12, 40]} />
        <meshBasicMaterial color="#F5C518" wireframe transparent opacity={0.6} />
      </mesh>

      {/* Octahedron — white */}
      <mesh ref={octahedron} position={[-1.2, 0.5, -0.5]}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshBasicMaterial color="#FFFFFF" wireframe transparent opacity={0.45} />
      </mesh>

      {/* Small icosahedron — amber */}
      <mesh position={[0.8, -1, -1]}>
        <icosahedronGeometry args={[0.3, 0]} />
        <meshBasicMaterial color="#F59E0B" wireframe transparent opacity={0.5} />
      </mesh>

      <pointLight position={[2, 2, 2]} color="#F5C518" intensity={1} />
      <pointLight position={[-2, -1, 1]} color="#FFFFFF" intensity={0.5} />
    </group>
  );
}

export default function HeroDecor() {
  return (
    <Canvas
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      camera={{ position: [0, 0, 4], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
    >
      <FloatingShapes />
    </Canvas>
  );
}
