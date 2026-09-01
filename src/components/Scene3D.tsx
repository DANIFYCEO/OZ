import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* ── Floating particles ── */
const Particles = ({ count = 200 }: { count?: number }) => {
  const mesh = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.02;
      mesh.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#00D26A" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

/* ── Distorted sphere ── */
const DistortedSphere = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.15;
      mesh.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={mesh} scale={1.8}>
        <icosahedronGeometry args={[1, 8]} />
        <MeshDistortMaterial
          color="#00D26A"
          wireframe
          distort={0.25}
          speed={2}
          roughness={0.4}
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
};

/* ── Ring ── */
const GlowRing = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.1;
      mesh.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, -2]}>
      <torusGeometry args={[3, 0.01, 16, 100]} />
      <meshBasicMaterial color="#00D26A" transparent opacity={0.2} />
    </mesh>
  );
};

/* ── Scene composition ── */
const Scene3D = () => {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00D26A" />
        <Particles count={150} />
        <DistortedSphere />
        <GlowRing />
      </Canvas>
    </div>
  );
};

export default Scene3D;
