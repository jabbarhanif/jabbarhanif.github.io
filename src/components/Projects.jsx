// Projects.jsx
import { useMemo, useState } from "react";

const projects = [
    // {
    //     title: "Tes youtube",
    //     bio: "tes youtube",
    //     desc: "Aplikasi Android/iOS dengan Flutter. Deskripsi panjang mengenai detail proyek, fitur notifikasi, integrasi API, dll.",
    //     tech: ["Flutter", "Firebase"],
    //     href: "https://www.youtube.com/watch?v=dzy2s7cXQ7A&list=RDdzy2s7cXQ7A&start_radio=1",
    //     preview: { type: "youtube", src: "https://www.youtube.com/watch?v=dzy2s7cXQ7A&list=RDdzy2s7cXQ7A&start_radio=1" }
    // },
    {
        title: "Web Portfolio",
        bio: "Web untuk meningkatkan kredibilitas & branding personal.",
        tgl: "💻",
        desc: "Perkenalan singkat tentang diri dan bidang keahlian, ringkasan pengalaman kerja atau proyek yang pernah dikerjakan, galeri hasil karya website, aplikasi, atau desain, serta penjelasan singkat mengenai peran dan teknologi yang digunakan. Selain itu juga menampilkan keterampilan utama yang saya kuasai, informasi kontak yang mudah diakses, serta tautan ke media sosial profesional atau repositori kode. Semua bagian ini disusun untuk menunjukkan kemampuan secara nyata sekaligus memperkuat personal branding.",
        tech: ["React", "Threejs", "Tailwind", "GithubPages"],
        href: "https://jabbarhanif.github.io/",
        preview: { type: "website", src: "https://jabbarhanif.github.io/" }
    },
    {
        title: "STIKUS PHOTOBOOTH SKETCHBOOK",
        bio: "Event vaksin jakarta Neo Soho Mall.",
        tgl: "may 2022",
        desc: "Permainan ini seperti permainan Osmo monster di iPad. Namun, yang membedakan adalah Osmo Monster berbasis 3D namun Sketchbook Photobooth Stickus berbasis 2D.",
        tech: ["Unity3D", "C#", "Ci3", "MySQL"],
        href: "",
        preview: { type: "image", src: "/img/projects/preview.png" }
    },
    {
        title: "AL-QUR'AN SCIENCE GAME",
        bio: "SMPN 22 Surabaya.",
        tgl: "Mar - May 2023",
        desc: "Fitur dari aplikasi ini adalah pengenalan Al Qur'an dan sains yang memiliki banyak kesamaan. Dan di mana guru dan siswa dapat berinteraksi dalam permainan untuk menambah keseruan dalam belajar dan mengajar.",
        tech: ["Unity3D", "C#", "Ci3", "MySQL"],
        href: "",
        preview: { type: "image", src: "/img/projects/preview.png" }
    },
    {
        title: "PLANETARIUM MUSEUM AL LOKA JALA",
        bio: "Maintenance - Game Tata Surya Dom Museum Loka Jala",
        tgl: "Aug 2024",
        desc: "Game edukasi Planet dan bintang-bintang di langit untuk pengunjung museum yang diadakan oleh Angkatan Laut. Edukasi cara membaca arah angin melalui bintang-bintang.",
        tech: ["Unity3D", "C#", "Blendy Dome VJ"],
        href: "https://www.youtube.com/watch?v=ZvV76o1iJi8",
        preview: { type: "youtube", src: "https://www.youtube.com/watch?v=ZvV76o1iJi8" }
    },
    {
        title: "WEB ADMIN AND SERVER PT",
        bio: "Maintenance - System PT Anghauz Indonesia",
        tgl: "Feb - Okt 2024",
        desc: "Fitur dari aplikasi ini adalah administrasi, finance, sales, absensi gps, HRD, inventori, logistic, Accounting, report.",
        tech: ["Ci3", "Jquery", "VPS Ubuntu", "Wordpress", "MySQL"],
        href: "https://anghauz.com/",
        preview: { type: "image", src: "/img/projects/preview.png" }
    },
    {
        title: "COMPANY PROFILE",
        bio: "PT Sumber Tirta Hakiki Indonesia",
        tgl: "Okt 2024",
        desc: "Web resmi perusahaan cabang Sumber Tirta Hakiki di indonesia. Website ini berperan untuk memperkenalkan identitas, produk atau layanan, serta kredibilitas perusahaan kepada publik. Selain sebagai sarana promosi, juga menjadi media informasi bagi calon klien, resep masakan dan menampilkan kontak resmi.",
        tech: ["React", "Laravel11", "Tailwind", "MySQL"],
        href: "https://sthindonesia.com/",
        preview: { type: "website", src: "https://resep.sthindonesia.com/" }
    },
    {
        title: "COMPANY PROFILE",
        bio: "PT Mahad Berkah Semesta",
        tgl: "Jul - Aug 2025",
        desc: "Web resmi perusahaan. Website ini berperan untuk memperkenalkan identitas, visi misi, produk atau layanan, serta kredibilitas perusahaan kepada publik. Selain sebagai sarana promosi, media informasi bagi calon klien, investor, maupun mitra bisnis untuk mengetahui lebih jauh tentang reputasi dan keunggulan perusahaan, menampilkan kontak resmi dan dapat menjadi pintu masuk untuk peluang kerja sama.",
        tech: ["React", "Laravel12", "Tailwind", "MySQL"],
        href: "https://mahadberkahsemesta.com/",
        preview: { type: "website", src: "https://mahadberkahsemesta.com/" }
    },
    {
        title: "WEB E-COMMERCE AND SYSTEM INTERAKTIF",
        bio: "Ifybo Fashion Interaktif – Web E-Commerce & QR System",
        tgl: "Des 2024",
        desc: "Sebuah platform e-commerce modern yang menggabungkan fashion dengan teknologi interaktif melalui QR code dinamis. Website ini dirancang responsif, user-friendly, dan dilengkapi sistem autentikasi produk untuk menciptakan pengalaman berbelanja yang unik, aman, dan personal.",
        tech: ["React", "Laravel12", "Tailwind", "MySQL"],
        href: "https://ifybo.com/",
        preview: { type: "website", src: "https://ifybo.com/" }
    },
    {
        title: "COMPANY PROFILE",
        bio: "PT Logika Boolean Kreatif",
        tgl: "Aug 2025",
        desc: "Web resmi perusahaan. Website ini berperan untuk memperkenalkan identitas, produk atau layanan, serta kredibilitas perusahaan kepada publik. Selain sebagai sarana promosi, media informasi bagi calon klien, investor, maupun mitra bisnis untuk mengetahui lebih jauh tentang reputasi dan keunggulan perusahaan, menampilkan kontak resmi dan dapat menjadi pintu masuk untuk peluang kerja sama.",
        tech: ["React", "Laravel12", "Tailwind", "Threejs", "MySQL"],
        href: "https://logicboolean.com/",
        preview: { type: "website", src: "https://logicboolean.com/" }
    },
    {
  "title": "COMMUNITY PROFILE",
  "bio": "Gicbo Community",
  "tgl": "Des 2024",
  "desc": "GICBO adalah komunitas cerdas yang menyediakan layanan bimbel, kursus musik, pelatihan IT, pengembangan agama, hingga solusi digital dan jasa pengiriman barang. Website ini dibangun untuk memperkenalkan identitas komunitas, mempromosikan layanan yang ditawarkan, serta menjadi pusat informasi dan pintu masuk bagi masyarakat, klien, maupun mitra bisnis. GICBO hadir sebagai ekosistem lengkap yang mendukung pengembangan diri dan peluang usaha dalam satu platform.",
  "tech": ["React", "Laravel12", "Tailwind", "MySQL"],
  "href": "https://gicbo.com/",
  "preview": { 
    "type": "website", 
    "src": "https://gicbo.com/" 
  }
},
    {
        title: "WEB ADMIN, SALES & INVENTORY",
        bio: "CV Mitra Jaya Abadi",
        tgl: "Nov 2021 Feb 2022",
        desc: "Aplikasi ini berfokus pada monitoring penjualan, dimana bagian sales/marketing dapat melakukan pemesanan pembelian dari jarak jauh tanpa perlu khawatir stok di gudang sedang kosong atau tidak.",
        tech: ["Ci3", "Jquery", "MySQL"],
        href: "",
        preview: { type: "image", src: "/img/projects/preview.png" }
    },
    {
        title: "LEADERSHIP PSYCHOLOGY GAME",
        bio: "Thesis Project or Final College Assignment",
        tgl: "Jun - Nov 2022",
        desc: "Keunggulan aplikasi ini adalah dapat mengidentifikasi gaya kepemimpinan otoriter dan demokratis, mengembangkan sumber daya manusia desa, dan mengembangkan sumber daya alam desa.",
        tech: ["Unity3D", "C#", "Ci4", "MySQL"],
        href: "",
        preview: { type: "image", src: "/img/projects/preview.png" }
    },
    {
        title: "J&T EXPRESS DELIVERY GAME",
        bio: "Anonymous Order Project (J&T)",
        tgl: "Des 2023 - Jun 2024",
        desc: "Fitur permainan adalah alur cerita permainan pengiriman berdasarkan cara kerja J&T Express.",
        tech: ["Unity3D", "C#", "Ci4", "MySQL"],
        href: "",
        preview: { type: "image", src: "/img/projects/preview.png" }
    },
    {
        title: "DUMMY KOLEKSI FRONT END",
        bio: "Front end Authentikasi Flutter.",
        tgl: "💻",
        desc: "Project dummy front end menggunakan flutter dengan fitur authentikasi. Login (- Email: jabb.boolean@gmail.com - Password: password - Role: superadmin - Email: dev.logicboolean@gmail.com - Password: password - Role: staff_outlet).",
        tech: ["Flutter", "Dummy", "tes"],
        href: "https://flutterkopio.gicbo.com/",
        preview: { type: "website", src: "https://flutterkopio.gicbo.com/" }
    },
    {
        title: "DUMMY KOLEKSI API",
        bio: "Back end API Swagger.",
        tgl: "💻",
        desc: "Project dummy back end menggunakan Laravel 11 dan Swagger. Login (- Email: jabb.boolean@gmail.com - Password: password - Role: superadmin - Email: dev.logicboolean@gmail.com - Password: password - Role: staff_outlet).",
        tech: ["Laravel12", "Swagger", "Dummy", "Tes"],
        href: "https://apikopio.gicbo.com/",
        preview: { type: "website", src: "https://apikopio.gicbo.com/" }
    },
    {
        title: "PIRATE FIGHTING GAME",
        bio: "Anonymous Order Project",
        tgl: "Des 2023 - Jun 2024",
        desc: "Game ini menampilkan pertarungan bajak laut melawan zombi untuk mendapatkan harta karun tersembunyi.",
        tech: ["Unity3D", "C#", "Ci4", "MySQL"],
        href: "",
        preview: { type: "image", src: "/img/projects/preview.png" }
    },
    {
        title: "WII-MOTE CONSOLE FIGHTING GAME",
        bio: "Internship Project",
        tgl: "Feb - Mar 2021",
        desc: "Fitur aplikasinya adalah pertarungan dengan menggunakan pengendali perangkat wii-mote dimana arah pukulan karakter permainan berdasarkan gerakan pemain yang menggunakan perangkat wii-mote.",
        tech: ["Unity3D", "C#", "Ci3", "MySQL"],
        href: "",
        preview: { type: "image", src: "/img/projects/preview.png" }
    },
];
// helper: convert link youtube normal → embed
function toEmbedUrl(url) {
    try {
        const u = new URL(url);

        // handle short link: youtu.be/<id>
        if (u.hostname.includes("youtu.be")) {
            return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
        }

        // handle normal link: youtube.com/watch?v=<id>
        if (u.searchParams.get("v")) {
            return `https://www.youtube.com/embed/${u.searchParams.get("v")}`;
        }

        // handle shorts: youtube.com/shorts/<id>
        if (u.pathname.startsWith("/shorts/")) {
            return `https://www.youtube.com/embed/${u.pathname.split("/")[2]}`;
        }

        // kalau sudah embed, kembalikan apa adanya
        if (u.pathname.startsWith("/embed/")) {
            return url;
        }

        return url; // fallback
    } catch {
        return url;
    }
}


export default function Projects() {
    const [query, setQuery] = useState("");
    const [active, setActive] = useState("All");
    const [expanded, setExpanded] = useState(null); // track card mana yg expand

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
                !q ||
                p.title.toLowerCase().includes(q) ||
                p.desc.toLowerCase().includes(q) ||
                p.tech.join(" ").toLowerCase().includes(q);
            return byTech && byText;
        });
    }, [query, active]);

    return (
        <div className="py-16">
            {/* Header + Filter */}
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
                                className={`rounded-full px-3 py-1 text-sm ring-1 transition ${active === t
                                    ? "bg-white/10 ring-white/20 text-gray-900 dark:text-gray-200"
                                    : "bg-white/5 ring-white/10 text-gray-900 dark:text-gray-200 hover:bg-white/10"
                                    }`}
                                aria-pressed={active === t}
                            >
                                {t}
                            </button>
                        ))}
                    </div>

                    <div className="w-full sm:w-auto">
                        <input
                            type="search"
                            placeholder="Cari…"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full sm:min-w-[14rem] rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
                        />
                    </div>
                </div>
            </div>

            {/* Card Grid */}
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((p, i) => (
                    <div
                        key={i}
                        className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] transition"
                    >
                        {/* Preview */}
                        <div className="aspect-[4/3] bg-black overflow-hidden">
                            {p.preview.type === "image" ? (
                                <img
                                    src={p.preview.src}
                                    alt={p.title}
                                    className="h-full w-full object-cover"
                                />
                            ) : p.preview.type === "youtube" ? (
                                expanded === i ? ( // baru render iframe kalau expanded aktif
                                    <iframe
                                        src={toEmbedUrl(p.preview.src)}
                                        title={p.title}
                                        className="h-full w-full"
                                        tabIndex="-1"
                                        loading="lazy"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    <div className="h-full w-full flex flex-col items-center justify-center text-white/60 text-sm space-y-2 p-4 text-center">
                                        <span>🌐 Preview tersedia</span>
                                        <button
                                            onClick={() => setExpanded(i)} // sama kayak versi tombol
                                            className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition text-black dark:text-white text-xs"
                                        >
                                            Lihat Preview
                                        </button>
                                    </div>

                                )
                            ) : p.preview.type === "website" ? (
                                expanded === i ? ( // sama, hanya render saat expand
                                    <iframe
                                        src={p.preview.src}
                                        title={p.title}
                                        className="h-full w-full"
                                        tabIndex="-1"
                                        loading="lazy"
                                        sandbox="allow-same-origin allow-scripts allow-popups"
                                    />
                                ) : (
                                    <div className="h-full w-full flex flex-col items-center justify-center text-white/60 text-sm space-y-2 p-4 text-center">
                                        <span>🔒 Website Preview belum ditampilkan</span>
                                        <button
                                            onClick={() => setExpanded(i)} // aktifkan iframe pas diklik
                                            className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition text-black dark:text-white text-xs"
                                        >
                                            Lihat Preview
                                        </button>
                                    </div>

                                )
                            ) : (
                                <div className="h-full w-full grid place-items-center text-black dark:text-white text-sm">
                                    No Preview
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-indigo-300">{p.title}</h3>

                            {/* Deskripsi pendek */}
                            <p className="mt-2 text-sm text-white/70 leading-relaxed line-clamp-2">
                                {p.bio}
                            </p>
                            <ul className="mt-4 flex flex-wrap gap-2">
                                <li
                                    className="text-xs rounded-full px-2.5 py-1 ring-1 ring-white/10 bg-white/5 text-white/80"
                                >
                                    {p.tgl}
                                </li>
                            </ul>
                            {/* Tech list */}
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {p.tech.map((t) => (
                                    <li
                                        key={t}
                                        className="text-xs rounded-full px-2.5 py-1 ring-1 ring-white/10 bg-white/5 text-white/80"
                                    >
                                        {t}
                                    </li>
                                ))}
                            </ul>

                            {/* Action buttons */}
                            <div className="mt-5 flex items-center justify-between">
                                <button
                                    onClick={() =>
                                        setExpanded(expanded === i ? null : i)
                                    }
                                    className="text-sm text-black dark:text-indigo-300 hover:text-indigo-100 transition"
                                >
                                    {expanded === i ? "Tutup" : "Detail"}
                                </button>
                                {p.href === "" ? (
                                    <p></p>
                                ) : (
                                    <a
                                        href={p.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white"
                                    >
                                        Lihat
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            className="transition -mr-0.5 group-hover:translate-x-0.5"
                                        >
                                            <path
                                                d="M7 17L17 7M17 7H9M17 7v8"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </a>
                                )}

                            </div>

                            {/* Deskripsi panjang expand */}
                            {expanded === i && (
                                <div className="mt-4 text-sm text-white/70 leading-relaxed border-t border-white/10 pt-3 animate-slideDown">
                                    {p.desc}
                                </div>
                            )}
                        </div>
                    </div>
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
