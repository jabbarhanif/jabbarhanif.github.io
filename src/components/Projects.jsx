// Projects.jsx
import { useMemo, useState } from "react";

const projects = [
    { title: "Web Portfolio", desc: "Portfolio modern dengan React + Three.js", tech: ["React", "Three.js"], href: "#" },
    { title: "Mobile App", desc: "Aplikasi Android/iOS dengan Flutter", tech: ["Flutter", "Firebase"], href: "#" },
    { title: "Game Indie", desc: "Game 2D interaktif dengan Unity", tech: ["Unity", "C#"], href: "#" },
];

export default function Projects() {
    const [query, setQuery] = useState("");
    const [active, setActive] = useState("All");

    const allTech = useMemo(() => {
        const set = new Set();
        projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
        return ["All", ...Array.from(set)];
    }, []);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return projects.filter((p) => {
            const byTech = active === "All" || p.tech.includes(active);
            const byText =
                !q || p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.tech.join(" ").toLowerCase().includes(q);
            return byTech && byText;
        });
    }, [query, active]);

    return (
        <div className="py-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
                    <p className="text-white/60 mt-1">
                        {filtered.length} project{filtered.length !== 1 ? "s" : ""} ditemukan
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                    <div className="flex flex-wrap gap-2">
                        {allTech.map((t) => (
                            <button
                                key={t}
                                onClick={() => setActive(t)}
                                className={`rounded-full px-3 py-1 text-sm ring-1 transition ${active === t ? "bg-white/10 ring-white/20 text-white" : "bg-white/5 ring-white/10 text-white/80 hover:bg-white/10"
                                    }`}
                                aria-pressed={active === t}
                            >
                                {t}
                            </button>
                        ))}
                    </div>

                    <div className="w-full sm:w-auto">
                        <label className="sr-only" htmlFor="search-projects">Cari projects</label>
                        <input
                            id="search-projects"
                            type="search"
                            inputMode="search"
                            placeholder="Cari…"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full sm:min-w-[14rem] rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
                        />
                    </div>
                </div>
            </div>

            <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((p, i) => (
                    <a
                        key={i}
                        href={p.href}
                        className="group relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] hover:to-white/[0.06] transition"
                    >
                        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 [mask-image:radial-gradient(80%_120%_at_50%_0%,white,transparent)] bg-[conic-gradient(from_180deg_at_50%_0%,rgba(99,102,241,0.25),rgba(236,72,153,0.25),rgba(99,102,241,0.25))]" />
                        <div className="aspect-[4/3] bg-white/5 overflow-hidden">
                            <div className="h-full w-full grid place-items-center text-white/40 text-sm">Preview</div>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-indigo-300 group-hover:text-indigo-200 transition">{p.title}</h3>
                            <p className="mt-2 text-sm text-white/70 leading-relaxed">{p.desc}</p>
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {p.tech.map((t) => (
                                    <li key={t} className="text-xs rounded-full px-2.5 py-1 ring-1 ring-white/10 bg-white/5 text-white/80">
                                        {t}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-5 flex items-center justify-between">
                                <span className="text-xs text-white/50">Klik untuk detail</span>
                                <span className="inline-flex items-center gap-1 text-sm font-medium text-white/80 group-hover:text-white">
                                    Lihat
                                    <svg width="16" height="16" viewBox="0 0 24 24" className="transition -mr-0.5 group-hover:translate-x-0.5">
                                        <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            {filtered.length === 0 && (
                <div className="mt-10 rounded-2xl border border-dashed border-white/15 p-8 text-center text-white/60">
                    Tidak ada project yang cocok dengan filter/kata kunci.
                </div>
            )}
        </div>
    );
}
