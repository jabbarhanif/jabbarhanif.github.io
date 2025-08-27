export default function Footer() {
    const year = new Date().getFullYear();

    const socials = [
        { name: "GitHub", href: "https://github.com/", icon: "🐙" },
        { name: "LinkedIn", href: "https://linkedin.com/", icon: "💼" },
        { name: "Twitter", href: "https://twitter.com/", icon: "🐦" },
    ];

    return (
        <footer className="relative mt-20 border-t border-white/10 bg-gray-950/80 backdrop-blur">
            <div className="max-w-6xl mx-auto px-6 py-12 text-center text-sm">
                {/* social links */}
                <div className="flex justify-center gap-5 mb-6">
                    {socials.map((s) => (
                        <a
                            key={s.name}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full ring-1 ring-white/15 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition"
                            aria-label={s.name}
                        >
                            <span className="text-lg">{s.icon}</span>
                        </a>
                    ))}
                </div>

                {/* divider */}
                <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-white/15 to-transparent mb-6" />

                {/* copyright */}
                <p className="text-gray-400">
                    © {year} <span className="font-medium text-white">Hanif Jabbar Ilmi Sumitra</span>
                </p>
                <p className="mt-2 text-gray-500">
                    Built with{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-fuchsia-400 font-medium">
                        React, Tailwind CSS & Three.js
                    </span>
                </p>
            </div>
        </footer>
    );
}
