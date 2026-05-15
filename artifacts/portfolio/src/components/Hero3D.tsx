import { Canvas } from '@react-three/fiber';
import { Stars, Float, Html } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const TECH_ICONS = [
  {
    name: 'React',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    glow: 'rgba(97,218,251,0.9)',
    shadow: '0 0 20px rgba(97,218,251,0.8), 0 0 40px rgba(97,218,251,0.4)',
    bg: 'rgba(97,218,251,0.08)',
    border: 'rgba(97,218,251,0.5)',
  },
  {
    name: 'Node.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    glow: 'rgba(104,160,99,0.9)',
    shadow: '0 0 20px rgba(104,160,99,0.8), 0 0 40px rgba(104,160,99,0.4)',
    bg: 'rgba(104,160,99,0.08)',
    border: 'rgba(104,160,99,0.5)',
  },
  {
    name: 'Express',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    glow: 'rgba(255,255,255,0.9)',
    shadow: '0 0 20px rgba(255,255,255,0.6), 0 0 40px rgba(255,255,255,0.2)',
    bg: 'rgba(255,255,255,0.08)',
    border: 'rgba(255,255,255,0.4)',
  },
  {
    name: 'MongoDB',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    glow: 'rgba(77,179,61,0.9)',
    shadow: '0 0 20px rgba(77,179,61,0.8), 0 0 40px rgba(77,179,61,0.4)',
    bg: 'rgba(77,179,61,0.08)',
    border: 'rgba(77,179,61,0.5)',
  },
  {
    name: 'Supabase',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
    glow: 'rgba(62,207,142,0.9)',
    shadow: '0 0 20px rgba(62,207,142,0.8), 0 0 40px rgba(62,207,142,0.4)',
    bg: 'rgba(62,207,142,0.08)',
    border: 'rgba(62,207,142,0.5)',
  },
  {
    name: 'Firestore',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg',
    glow: 'rgba(255,196,0,0.9)',
    shadow: '0 0 20px rgba(255,196,0,0.8), 0 0 40px rgba(255,196,0,0.4)',
    bg: 'rgba(255,196,0,0.08)',
    border: 'rgba(255,196,0,0.5)',
  },
];

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 6 + Math.random() * 6;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#3b82f6" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

function WireframeOrb() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.x = s.clock.elapsedTime * 0.15;
      ref.current.rotation.y = s.clock.elapsedTime * 0.22;
    }
  });
  return (
    <Float speed={1.5} floatIntensity={1.5}>
      <mesh ref={ref} position={[5, 1.5, -4]}>
        <icosahedronGeometry args={[1.8, 0]} />
        <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.18} />
      </mesh>
    </Float>
  );
}

function TorusRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.x = s.clock.elapsedTime * 0.1;
      ref.current.rotation.z = s.clock.elapsedTime * 0.08;
    }
  });
  return (
    <Float speed={2} floatIntensity={0.5}>
      <mesh ref={ref} position={[-5, -1, -3]}>
        <torusGeometry args={[1.5, 0.05, 16, 60]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.25} />
      </mesh>
    </Float>
  );
}

function TechOrbit() {
  const outerGroupRef = useRef<THREE.Group>(null);
  const innerGroupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (outerGroupRef.current) {
      outerGroupRef.current.rotation.y = t * 0.28;
    }
    if (innerGroupRef.current) {
      innerGroupRef.current.rotation.y = -t * 0.18;
      innerGroupRef.current.rotation.x = Math.sin(t * 0.3) * 0.08;
    }
  });

  const ORBIT_RADIUS = 4.2;
  const ORBIT_TILT = 0.42; // radians — tilt for 3D depth feel

  return (
    <group position={[0, 1.0, 0]}>
      {/* Outer orbit ring — 3 icons (React, Express, Supabase) */}
      <group ref={outerGroupRef} rotation={[ORBIT_TILT, 0, 0]}>
        {[TECH_ICONS[0], TECH_ICONS[2], TECH_ICONS[4]].map((tech, i) => {
          const angle = (i / 3) * Math.PI * 2;
          const x = Math.cos(angle) * ORBIT_RADIUS;
          const z = Math.sin(angle) * ORBIT_RADIUS;
          return (
            <mesh key={tech.name} position={[x, 0, z]}>
              <Html center zIndexRange={[50, 0]} distanceFactor={9}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: tech.bg,
                    backdropFilter: 'blur(12px)',
                    border: `1.5px solid ${tech.border}`,
                    boxShadow: tech.shadow,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,
                    padding: 8,
                  }}
                >
                  <img
                    src={tech.src}
                    alt={tech.name}
                    width={32}
                    height={32}
                    style={{
                      width: 32,
                      height: 32,
                      objectFit: 'contain',
                      filter: tech.name === 'Express' ? 'invert(1)' : 'none',
                      imageRendering: 'crisp-edges',
                    }}
                  />
                </div>
              </Html>
            </mesh>
          );
        })}

        {/* Orbit ring visual */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[ORBIT_RADIUS, 0.008, 8, 80]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.25} />
        </mesh>
      </group>

      {/* Inner orbit ring — 3 icons (Node.js, MongoDB, Firestore) */}
      <group ref={innerGroupRef} rotation={[-ORBIT_TILT * 0.7, 0.3, 0]}>
        {[TECH_ICONS[1], TECH_ICONS[3], TECH_ICONS[5]].map((tech, i) => {
          const angle = (i / 3) * Math.PI * 2 + Math.PI / 3;
          const x = Math.cos(angle) * (ORBIT_RADIUS * 0.72);
          const z = Math.sin(angle) * (ORBIT_RADIUS * 0.72);
          return (
            <mesh key={tech.name} position={[x, 0, z]}>
              <Html center zIndexRange={[50, 0]} distanceFactor={9}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    background: tech.bg,
                    backdropFilter: 'blur(12px)',
                    border: `1.5px solid ${tech.border}`,
                    boxShadow: tech.shadow,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 8,
                  }}
                >
                  <img
                    src={tech.src}
                    alt={tech.name}
                    width={30}
                    height={30}
                    style={{
                      width: 30,
                      height: 30,
                      objectFit: 'contain',
                      imageRendering: 'crisp-edges',
                    }}
                  />
                </div>
              </Html>
            </mesh>
          );
        })}

        {/* Inner orbit ring visual */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[ORBIT_RADIUS * 0.72, 0.006, 8, 80]} />
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.2} />
        </mesh>
      </group>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.15} />
        <pointLight position={[8, 8, 8]} intensity={1.2} color="#3b82f6" />
        <pointLight position={[-8, -8, -8]} intensity={0.6} color="#8b5cf6" />
        <pointLight position={[0, 5, 0]} intensity={0.4} color="#06b6d4" />

        <Stars radius={120} depth={60} count={6000} factor={4} saturation={0} fade speed={0.8} />

        <ParticleField />
        <WireframeOrb />
        <TorusRing />
        <TechOrbit />
      </Canvas>
    </div>
  );
}
