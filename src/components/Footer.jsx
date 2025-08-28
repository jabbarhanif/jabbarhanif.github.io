import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    const year = new Date().getFullYear();

    const socials = [
        { name: "GitHub", href: "https://github.com/jabbarhanif", icon: <FaGithub /> },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/jabbar-08aab3261", icon: <FaLinkedin /> },
        { name: "Whatsapp", href: "https://wa.me/6281232461759", icon: <FaWhatsapp className="text-green-500" /> },
    ];

    return (
        <div className="relative">
            {/* 👾 karakter lucu berjalan */}
            {["🐧"].map((char, i) => (
                <motion.div
                    key={i}
                    className="absolute -top-10 left-0 text-3xl select-none"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100vw" }}
                    transition={{
                        duration: 10 + i * 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                        delay: i * 1,
                    }}
                // style={{ top: -40 * i }} // biar tiap karakter beda jalur
                >
                    {char}
                </motion.div>
            ))}
            <motion.div
                className="absolute -top-10 left-0 text-3xl select-none"
                initial={{ x: "100vw" }}            // mulai dari luar kanan layar
                animate={{
                    x: "-100%",                       // jalan sampai luar kiri
                    y: [0, -20, 20, -10, 0],          // zig-zag naik turun
                }}
                transition={{
                    duration: 30,                     // lebih pelan (30 detik)
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                👾
            </motion.div>

            {/* <motion.div
                className="text-3xl"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                }}
            >
                🐧
            </motion.div> */}

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
                                className="inline-flex items-center justify-center w-10 h-10 rounded-full ring-1 ring-white/15 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition text-xl"
                                aria-label={s.name}
                            >
                                {s.icon}
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
        </div>
    );
}
