// About.jsx
import { lazy, Suspense, useEffect, useMemo, useRef, useState } from "react";
const Scene3D = lazy(() => import("./Scene3D"));

function useInView(options = { root: null, rootMargin: "0px", threshold: 0.25 }) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        if (!ref.current) return;
        const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), options);
        io.observe(ref.current);
        return () => io.disconnect();
    }, [options.root, options.rootMargin, options.threshold]);
    return { ref, inView };
}

function CanvasSkeleton() {
    return (
        <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60">
            {/* Mobile/tablet pakai rasio; di lg+ isi penuh tinggi kolom */}
            <div className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-auto lg:h-full w-full" />
            <div className="absolute inset-0 animate-pulse bg-[radial-gradient(transparent,rgba(255,255,255,0.04))]" />
            <div className="absolute bottom-3 right-3 text-xs text-white/60">Loading 3D…</div>
        </div>
    );
}

export default function About() {
    const { ref: viewRef, inView } = useInView();
    const dpr = useMemo(() => {
        if (typeof window === "undefined") return 1;
        const raw = window.devicePixelRatio || 1;
        return Math.min(2, Math.max(1, raw));
    }, []);

    return (
        <div className="py-8 sm:py-20">
            {/* items-stretch agar tiap kolom bisa setinggi barisnya di lg+ */}
            <div className="grid lg:grid-cols-2 gap-y-12 gap-x-10 items-start lg:items-stretch">
                {/* Teks */}
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Tentang Saya</h2>
                    <p className="mt-4 text-white/80 leading-relaxed">
                        Saya fokus pada pengembangan <strong>Web</strong>, <strong>Mobile</strong>, <strong>Game</strong>, dan{" "}
                        <strong>interaksi 3D</strong>. Saya senang bereksperimen dengan UI modern, animasi, serta sistem realtime untuk pengalaman
                        pengguna yang hidup dan responsif.
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                        {["React", "Three.js", "WebGL", "TypeScript", "Tailwind CSS", "Realtime", "Shaders", "UX Motion"].map((tag) => (
                            <li
                                key={tag}
                                className="text-xs sm:text-sm rounded-full px-3 py-1 ring-1 ring-white/15 bg-white/5 text-white/80"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#projects"
                            className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold bg-gradient-to-r from-indigo-500 to-fuchsia-500 !text-white hover:from-indigo-400 hover:to-fuchsia-400 shadow-sm ring-1 ring-white/15"
                        >
                            Lihat Karya
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold bg-white/5 hover:bg-white/10 ring-1 ring-white/15 text-white/90"
                        >
                            Hubungi Saya
                        </a>
                    </div>
                </div>

                {/* Kanvas 3D */}
                <div ref={viewRef} className="lg:h-full">
                    {/* Di lg+: kartu 3D ikut setinggi baris (match tinggi kolom teks) */}
                    <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 lg:h-full lg:min-h-[420px] xl:min-h-[520px]">
                        {/* Wrapper viewport 3D:
                - Mobile/tablet: pakai aspect ratio
                - lg+: buang rasio & penuh tinggi kartu */}
                        <div className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-auto lg:h-full w-full">
                            <Suspense fallback={<CanvasSkeleton />}>
                                <Scene3D
                                    active={inView}           // render hanya saat terlihat
                                    dpr={dpr}
                                    className="h-full w-full select-none"
                                    photos={[
                                        "/img/face-posx.png", // 0:+X
                                        "/img/face-negx.png", // 1:-X
                                        "/img/face-posy.png", // 2:+Y
                                        "/img/face-negy.png", // 3:-Y
                                        "/img/face-posz.png", // 4:+Z (depan)
                                        "/img/face-negz.png", // 5:-Z (belakang)
                                    ]}
                                />
                            </Suspense>
                        </div>

                        <div className="absolute bottom-3 left-3 text-xs sm:text-sm text-white/70">Realtime 3D Preview</div>
                        {/* Glow tidak overflow */}
                        <div className="pointer-events-none absolute inset-0 rounded-2xl [mask-image:radial-gradient(white,transparent_65%)] bg-gradient-to-r from-indigo-400/15 via-sky-300/10 to-fuchsia-400/15" />
                    </div>
                </div>
            </div>
        </div>
    );
}
