import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Orb({ position, scale, speed, color }: { position: [number, number, number]; scale: number; speed: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();
  const initialPos = useMemo(() => new THREE.Vector3(...position), [position]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed;
    ref.current.position.x = initialPos.x + Math.sin(t) * 0.5 + pointer.x * 0.3;
    ref.current.position.y = initialPos.y + Math.cos(t * 0.8) * 0.4 + pointer.y * 0.2;
    ref.current.position.z = initialPos.z + Math.sin(t * 0.5) * 0.3;
  });

  return (
    <Sphere ref={ref} args={[1, 64, 64]} scale={scale} position={position}>
      <MeshDistortMaterial
        color={color}
        envMapIntensity={0.8}
        clearcoat={1}
        clearcoatRoughness={0}
        metalness={0.9}
        roughness={0.1}
        distort={0.2}
        speed={1.5}
        transparent
        opacity={0.35}
      />
    </Sphere>
  );
}

const orbs = [
  { position: [-3, 2, -2] as [number, number, number], scale: 0.8, speed: 0.3, color: "#00E5FF" },
  { position: [4, -1, -3] as [number, number, number], scale: 1.2, speed: 0.2, color: "#7C3AED" },
  { position: [-1, -2, -4] as [number, number, number], scale: 0.6, speed: 0.4, color: "#00E5FF" },
  { position: [2, 3, -5] as [number, number, number], scale: 1, speed: 0.25, color: "#7C3AED" },
  { position: [-4, 0, -6] as [number, number, number], scale: 0.5, speed: 0.35, color: "#00E5FF" },
];

const FloatingOrbs = () => (
  <div className="fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00E5FF" />
      <pointLight position={[-10, -10, 5]} intensity={0.3} color="#7C3AED" />
      {orbs.map((orb, i) => (
        <Orb key={i} {...orb} />
      ))}
    </Canvas>
  </div>
);

export default FloatingOrbs;
