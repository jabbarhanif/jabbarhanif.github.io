// Scene3D.jsx
import { useEffect, useMemo, useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls, AdaptiveDpr } from "@react-three/drei";
import * as THREE from "three";

/** Sisi box: 0:+X, 1:-X, 2:+Y, 3:-Y, 4:+Z (depan), 5:-Z */
function useSafeTextures(urls, gl) {
    const validIdx = [];
    const validUrls = [];
    urls.forEach((u, i) => {
        if (typeof u === "string" && u.trim().length) { validIdx.push(i); validUrls.push(u.trim()); }
    });

    const loaded = useLoader(THREE.TextureLoader, validUrls, (ldr) => ldr.setCrossOrigin?.("anonymous"));
    const textures = Array(urls.length).fill(null);
    loaded.forEach((tex, j) => {
        const i = validIdx[j];
        if (!tex) return;
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.anisotropy = gl?.capabilities?.getMaxAnisotropy?.() ?? 1;
        tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
        tex.minFilter = THREE.LinearMipmapLinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.needsUpdate = true;
        textures[i] = tex;
    });
    return textures;
}

function SpinningBox({ spin, photos = [], onPointerActivity }) {
    const ref = useRef(null);
    const { gl } = useThree();
    const faceUrls = useMemo(() => {
        const arr = Array.isArray(photos) ? [...photos] : [];
        while (arr.length < 6) arr.push(null);
        return arr.slice(0, 6);
    }, [photos]);
    const textures = useSafeTextures(faceUrls, gl);

    // pointer cursor
    useEffect(() => {
        if (!gl?.domElement) return;
        const el = gl.domElement;
        const onOver = () => (el.style.cursor = "grab");
        const onDown = () => (el.style.cursor = "grabbing");
        const onOut = () => (el.style.cursor = "auto");
        el.addEventListener("pointerover", onOver);
        el.addEventListener("pointerdown", onDown);
        el.addEventListener("pointerup", onOver);
        el.addEventListener("pointerleave", onOut);
        return () => {
            el.removeEventListener("pointerover", onOver);
            el.removeEventListener("pointerdown", onDown);
            el.removeEventListener("pointerup", onOver);
            el.removeEventListener("pointerleave", onOut);
        };
    }, [gl]);

    // auto spin yang halus, bisa dimatikan saat dragging
    useFrame((_, delta) => {
        if (!ref.current) return;
        if (spin) {
            ref.current.rotation.x += 0.3 * delta;
            ref.current.rotation.y += 0.5 * delta;
        }
    });

    return (
        <mesh
            ref={ref}
            onPointerDown={onPointerActivity}
            onPointerMove={onPointerActivity}
            onWheel={onPointerActivity}
            onTouchStart={onPointerActivity}
        >
            <boxGeometry args={[1, 1, 1]} />
            {Array.from({ length: 6 }).map((_, i) => (
                <meshStandardMaterial
                    key={i}
                    attach={`material-${i}`}
                    map={textures[i] ?? null}
                    color={textures[i] ? "white" : "royalblue"}
                    metalness={0.25}
                    roughness={0.35}
                />
            ))}
        </mesh>
    );
}

function Hint({ show }) {
    if (!show) return null;
    return (
        <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center">
            <div className="rounded-full bg-black/40 px-3 py-1 text-[11px] sm:text-xs text-white/85 ring-1 ring-white/15">
                Drag to rotate • Pinch to zoom
            </div>
        </div>
    );
}

export default function Scene3D({
    active = true,
    dpr = 1,
    className = "",
    photos = [],
    background = "#0f172a",
}) {
    const [visible, setVisible] = useState(true);
    const [userDragging, setUserDragging] = useState(false);
    const [spin, setSpin] = useState(true);
    const [showHint, setShowHint] = useState(true);
    const idleTimeout = useRef(null);
    const draggingRef = useRef(false);

    useEffect(() => {
        const onVis = () => setVisible(!document.hidden);
        document.addEventListener("visibilitychange", onVis, { passive: true });
        return () => document.removeEventListener("visibilitychange", onVis);
    }, []);
    const isActive = active && visible;

    // ketika user interaksi: hentikan spin; sembunyikan hint; restart spin setelah idle 2.2s
    const markUserActivity = () => {
        setShowHint(false);
        setSpin(false);
        setUserDragging(true);
        clearTimeout(idleTimeout.current);
        idleTimeout.current = setTimeout(() => {
            setUserDragging(false);
            setSpin(true);
        }, 2200);
    };

    // Cleanup timer
    useEffect(() => () => clearTimeout(idleTimeout.current), []);

    // overlay hint perlu posisi absolute → bungkus Canvas
    return (
        <div className={`relative ${className}`}>
            <Canvas
                className="h-full w-full"
                dpr={dpr}
                frameloop={isActive ? "always" : "demand"}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance", preserveDrawingBuffer: false }}
                camera={{ position: [2.4, 1.6, 2.8], fov: 50, near: 0.1, far: 100 }}
                onPointerDown={() => { draggingRef.current = true; markUserActivity(); }}
                onPointerUp={() => { draggingRef.current = false; }}
            >
                <color attach="background" args={[background]} />
                <hemisphereLight intensity={0.7} color={"#ffffff"} groundColor={"#2c2c2c"} />
                <directionalLight position={[3, 3, 3]} intensity={1.1} />

                <Suspense fallback={null}>
                    <SpinningBox spin={spin && isActive} photos={photos} onPointerActivity={markUserActivity} />
                </Suspense>

                {/* OrbitControls ramah jari/mouse */}
                <OrbitControls
                    makeDefault
                    enableDamping
                    dampingFactor={0.12}
                    // rotasi nyaman
                    rotateSpeed={0.9}           // mouse
                    // sentuh (satu jari) = ROTATE, dua jari = DOLLY (zoom)
                    touches={{ ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN }}
                    // zoom dibatasi agar tidak terlalu dekat/jauh
                    enableZoom
                    minDistance={1.6}
                    maxDistance={6.5}
                    // batasi sudut kamera supaya objek selalu terlihat
                    minPolarAngle={Math.PI * 0.18}
                    maxPolarAngle={Math.PI * 0.82}
                    // opsional: matikan pan agar fokus ke rotasi/zoom
                    enablePan={false}
                    // easing tambahan saat selesai drag
                    onStart={markUserActivity}
                    onChange={() => isActive && markUserActivity()}
                    onEnd={() => {
                        draggingRef.current = false;
                        // biarkan timer idle menghidupkan auto-spin lagi
                    }}
                />
                <AdaptiveDpr pixelated />
            </Canvas>

            {/* Hint overlay (hilang setelah interaksi pertama) */}
            <Hint show={showHint} />
        </div>
    );
}
