import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Azaga Creative Technology | Jl. Tambaksari II no. 4, Surabaya",
        company: "Software House",
        period: "May 2021 - Now",
        description: [
            "Creative Innovation: Mengidentifikasi, meneliti, dan mengembangkan teknologi baru, teknologi yang masih dalam tahap prototipe, serta teknologi yang sudah ada.",
            "Fullstack Development and Website Maintenance: Bertanggung jawab untuk mengembangkan aplikasi permainan acara berbasis full-stack untuk Danone, serta sistem administrasi dan inventaris, yang mencakup desain front-end hingga implementasi back-end.",
            "Technical Support and Code Development: Memberikan dukungan teknis dan berkontribusi pada pengembangan kode di berbagai proyek, memastikan integrasi yang efektif dan solusi optimal yang disesuaikan dengan kebutuhan pengguna.",
        ],
    },
    {
        role: "Matahari Dept. Store Surabaya | Tunjungan Mall, Royal Mall, Cito Mall",
        company: "Retail",
        period: "Okt 2012 - Des 2020",
        description: [
            "SALES (2012 - 2020) – Menjual produk sepatu merk Fladeo.",
           // "CHIEF SALES (2017 - 2020) – Mengelola penjualan junior, mencapai target, menampilkan produk, memproses laporan penjualan dan stok.",
        ],
    },
    // {
    //     role: "IT Project Manager",
    //     company: "Startup Projects",
    //     period: "2021 - 2022",
    //     description: [
    //         "Mengelola tim dev, desain, dan server deployment.",
    //         "Berhasil mengirimkan produk tepat waktu dengan kualitas tinggi.",
    //     ],
    // },
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

                            {/* List description */}
                            <ul className="mt-3 list-disc list-inside text-gray-300 space-y-2">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
