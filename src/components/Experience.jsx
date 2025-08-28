import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Software Developer",
        company: "Logic Boolean",
        period: "2022 - Present",
        description:
            "Membangun aplikasi web, mobile, dan game interaktif. Fokus pada teknologi modern (React, Laravel, Flutter, Three.js).",
    },
    {
        role: "Fullstack Developer",
        company: "Freelance",
        period: "2019 - 2022",
        description:
            "Mengembangkan website e-commerce, company profile, dan aplikasi custom untuk klien lokal maupun internasional.",
    },
    {
        role: "IT Project Manager",
        company: "Startup Projects",
        period: "2021 - 2022",
        description:
            "Mengelola tim dev, desain, dan server deployment. Berhasil mengirimkan produk tepat waktu dengan kualitas tinggi.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                    <span className="text-indigo-400">Experience</span> Journey
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Beberapa pengalaman kerja yang membentuk saya menjadi
                    developer yang lebih baik.
                </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative border-l border-gray-700">
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                        viewport={{ once: true }}
                        className="mb-10 ml-6"
                    >
                        {/* Dot + Icon */}
                        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 ring-4 ring-gray-950">
                            <Briefcase className="h-3 w-3 text-white" />
                        </span>

                        {/* Card */}
                        <div className="p-6 bg-gray-900/50 rounded-2xl shadow-md hover:shadow-indigo-500/20 transition-all duration-300">
                            <h3 className="text-xl font-semibold">
                                {exp.role} —{" "}
                                <span className="text-indigo-400">{exp.company}</span>
                            </h3>
                            <span className="text-sm text-gray-400">{exp.period}</span>
                            <p className="mt-3 text-gray-300">{exp.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
