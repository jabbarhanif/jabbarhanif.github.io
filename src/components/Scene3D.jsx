// Scene3D.jsx
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, AdaptiveDpr } from "@react-three/drei";

function SpinningBox({ isActive }) {
    const ref = useRef(null);
    const [hovered, setHovered] = useState(false);
    const { gl } = useThree();

    useEffect(() => {
        if (!gl?.domElement) return;
        gl.domElement.style.cursor = hovered ? "pointer" : "auto";
        return () => {
            if (gl?.domElement) gl.domElement.style.cursor = "auto";
        };
    }, [hovered, gl]);

    useFrame((_, delta) => {
        if (!isActive || !ref.current) return;
        ref.current.rotation.x += 0.6 * delta;
        ref.current.rotation.y += 0.9 * delta;
        const target = hovered ? 1.2 : 1;
        const s = ref.current.scale.x + (target - ref.current.scale.x) * 0.12;
        ref.current.scale.setScalar(s);
    });

    return (
        <mesh ref={ref} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="royalblue" metalness={0.25} roughness={0.35} />
        </mesh>
    );
}

export default function Scene3D({ active = true, dpr = 1, className = "" }) {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const onVis = () => setVisible(!document.hidden);
        document.addEventListener("visibilitychange", onVis, { passive: true });
        return () => document.removeEventListener("visibilitychange", onVis);
    }, []);
    const isActive = active && visible;

    return (
        <Canvas
            className={className}
            style={{ width: "100%", height: "100%", display: "block" }}
            dpr={dpr}
            frameloop={isActive ? "always" : "demand"}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance", preserveDrawingBuffer: false }}
            camera={{ position: [2.4, 1.8, 3.2], fov: 50 }}
        >
            <color attach="background" args={["#0f172a"]} />
            <hemisphereLight intensity={0.6} color={"#ffffff"} groundColor={"#222222"} />
            <directionalLight position={[3, 3, 3]} intensity={1.1} />
            <SpinningBox isActive={isActive} />
            <OrbitControls makeDefault enableDamping dampingFactor={0.1} minDistance={2} maxDistance={8} enablePan={false} />
            <AdaptiveDpr pixelated />
        </Canvas>
    );
}
