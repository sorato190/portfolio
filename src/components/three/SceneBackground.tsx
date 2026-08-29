"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";

const NODE_COLORS = ["#c9974f", "#a8703f", "#7a4328", "#8a7256"];

type Point = [number, number, number];

function fibonacciSphere(samples: number, radius: number): Point[] {
  const points: Point[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / (samples - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = phi * i;
    points.push([Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius]);
  }
  return points;
}

function buildEdges(points: Point[], neighborCount: number): [number, number][] {
  const edges: [number, number][] = [];
  const seen = new Set<string>();
  points.forEach((p, i) => {
    const distances = points
      .map((q, j) => ({
        j,
        d:
          j === i
            ? Infinity
            : (p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2 + (p[2] - q[2]) ** 2,
      }))
      .sort((a, b) => a.d - b.d)
      .slice(0, neighborCount);

    distances.forEach(({ j }) => {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!seen.has(key)) {
        seen.add(key);
        edges.push([i, j]);
      }
    });
  });
  return edges;
}

function NetworkNodes() {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(() => fibonacciSphere(16, 3.2), []);
  const edges = useMemo(() => buildEdges(nodes, 2), [nodes]);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <group ref={group} position={[0, 0.4, -8]}>
      {edges.map(([a, b], i) => (
        <Line
          key={i}
          points={[nodes[a], nodes[b]]}
          color="#a8703f"
          lineWidth={1}
          transparent
          opacity={0.35}
        />
      ))}
      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshStandardMaterial
            color={NODE_COLORS[i % NODE_COLORS.length]}
            emissive={NODE_COLORS[i % NODE_COLORS.length]}
            emissiveIntensity={0.5}
            roughness={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

function TechShapes() {
  return (
    <>
      <Float speed={1.8} rotationIntensity={1.4} floatIntensity={2.2}>
        <mesh position={[-4.2, 2, -6]} scale={0.9}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#a8703f"
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={1.2} floatIntensity={2}>
        <mesh position={[4.4, -1.4, -7]} scale={0.8}>
          <torusGeometry args={[0.9, 0.26, 6, 20]} />
          <meshStandardMaterial
            color="#7a4328"
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={1.6} floatIntensity={2.4}>
        <mesh position={[2.8, 2.8, -6.5]} scale={0.6}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial
            color="#c9974f"
            wireframe
            transparent
            opacity={0.45}
          />
        </mesh>
      </Float>

      <Float speed={1.3} rotationIntensity={1} floatIntensity={1.8}>
        <mesh position={[-3.4, -2.6, -6]} scale={0.8}>
          <boxGeometry args={[1.1, 1.1, 1.1]} />
          <meshStandardMaterial
            color="#8a7256"
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>
      </Float>
    </>
  );
}

export default function SceneBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#c9974f" />
        <pointLight position={[-5, -3, -5]} intensity={0.5} color="#7a4328" />
        <NetworkNodes />
        <TechShapes />
      </Canvas>
    </div>
  );
}
