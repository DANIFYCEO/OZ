import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* ── Mouse tracking hook ── */
function useMousePosition() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position between -1 and 1
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mouse;
}

/* ── Floating particles ── */
const Particles = ({ count = 200 }: { count?: number }) => {
  const mesh = useRef<THREE.Points>(null!);
  const mouse = useMousePosition();

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
      
      // Subtle parallax effect on particles
      mesh.current.position.x += (mouse.x * 2 - mesh.current.position.x) * 0.02;
      mesh.current.position.y += (mouse.y * 2 - mesh.current.position.y) * 0.02;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#00D26A" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
};

/* ── Distorted sphere ── */
const DistortedSphere = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  const mouse = useMousePosition();
  const { viewport } = useThree();

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.15;
      mesh.current.rotation.x += delta * 0.05;

      // Make the sphere follow the mouse slightly
      const targetX = (mouse.x * viewport.width) / 8;
      const targetY = (mouse.y * viewport.height) / 8;

      mesh.current.position.x += (targetX - mesh.current.position.x) * 0.05;
      mesh.current.position.y += (targetY - mesh.current.position.y) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh} scale={2}>
        <icosahedronGeometry args={[1, 16]} />
        <MeshDistortMaterial
          color="#00D26A"
          wireframe
          distort={0.4}
          speed={2.5}
          roughness={0.2}
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
  const mouse = useMousePosition();

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.1;
      mesh.current.rotation.z += delta * 0.05;

      // Inverse parallax for depth
      mesh.current.position.x += (-mouse.x * 0.5 - mesh.current.position.x) * 0.02;
      mesh.current.position.y += (-mouse.y * 0.5 - mesh.current.position.y) * 0.02;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, -3]}>
      <torusGeometry args={[3.5, 0.02, 32, 100]} />
      <meshBasicMaterial color="#00D26A" transparent opacity={0.15} />
    </mesh>
  );
};

/* ── Scene composition ── */
const Scene3D = () => {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.6} color="#00D26A" />
        <Particles count={250} />
        <DistortedSphere />
        <GlowRing />
      </Canvas>
    </div>
  );
};

export default Scene3D;
