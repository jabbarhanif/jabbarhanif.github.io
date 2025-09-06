// Header.jsx
import { useEffect, useRef, useState } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const firstLinkRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 1024) setOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // Lock body + ESC
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = open ? "hidden" : prev || "";
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", onKey);
        if (open) setTimeout(() => firstLinkRef.current?.focus(), 0);
        return () => {
            document.body.style.overflow = prev || "";
            document.removeEventListener("keydown", onKey);
        };
    }, [open]);

    useEffect(() => {
        const onClick = (e) => {
            const a = e.target.closest("a[href^='#']");
            if (a) setOpen(false);
        };
        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, []);

    const nav = [
        { label: "Profil", href: "#profil" },
        { label: "Contact", href: "#contact" },
        { label: "Project", href: "#projects" },
        { label: "Experience", href: "#experience" },
    ];

    return (
        <>
            {/* not-prose mencegah Tailwind Typography mewarnai <a> */}
            <div
                className={[
                    "fixed inset-x-0 top-0 z-[100] not-prose text-white",
                    "transition-all duration-300",
                    scrolled
                        ? "bg-black/85 supports-[backdrop-filter:blur(0)]:backdrop-blur border-b border-white/10 shadow-lg"
                        : "bg-black/80 supports-[backdrop-filter:blur(0)]:backdrop-blur",
                ].join(" ")}
                style={{ WebkitBackdropFilter: "blur(8px)" }}
            >
                <header className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6">
                    <div className="flex h-16 sm:h-20 items-center justify-between">
                        <a
                            href="/"
                            className="group inline-flex items-center gap-3 min-w-0"
                            aria-label="Go to homepage"
                        >
                            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-md transition-transform group-hover:scale-105">
                                <span className="text-sm font-extrabold tracking-wide">jbr</span>
                            </div>

                            {/* Nama + subtitle: putih 100% */}
                            <div className="text-left min-w-0">
                                <span className="block text-sm sm:text-lg font-semibold leading-tight !text-white break-words">
                                    Hanif Jabbar Ilmi Sumitra
                                </span>
                                <span className="block text-xs sm:text-sm leading-4 !text-white">
                                    Creative Software Developer
                                </span>
                            </div>
                        </a>

                        {/* Nav desktop: paksa putih di semua state */}
                        <nav className="hidden lg:flex items-center gap-2" aria-label="Primary">
                            {nav.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="px-3 py-2 text-[15px] font-medium rounded-md hover:bg-white/10 transition
                             !text-white hover:!text-white focus:!text-white focus-visible:!text-white active:!text-white visited:!text-white
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="mx-2 h-6 w-px bg-white/20" />
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold ring-1 ring-white/25 shadow-sm transition hover:shadow-md
                           bg-gradient-to-r from-indigo-500 to-fuchsia-500
                           !text-white hover:!text-white focus:!text-white visited:!text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                            >
                                Hire me
                                <svg width="18" height="18" viewBox="0 0 24 24" className="-mr-0.5" aria-hidden="true">
                                    <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </nav>

                        {/* Toggle mobile — XXL (64px) */}
                        <button
                            type="button"
                            onClick={() => setOpen((v) => !v)}
                            className="lg:hidden inline-flex h-16 w-16 items-center justify-center rounded-2xl
             ring-2 ring-white/50 bg-white/10 hover:bg-white/15 active:bg-white/20
             text-gray-900 dark:text-gray-200 shadow-lg transition
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                            aria-label="Toggle menu"
                            aria-expanded={open}
                            aria-controls="mobile-nav"
                        >
                            <svg
                                className={`transition-transform ${open ? "rotate-90" : ""}`}
                                width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"
                            >
                                {open ? (
                                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                                ) : (
                                    <path d="M3 6.5h18M3 12h18M3 17.5h18" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                                )}
                            </svg>
                        </button>

                    </div>
                </header>

                {/* Mobile nav: paksa putih di semua state */}
                <div
                    id="mobile-nav"
                    className={[
                        "lg:hidden overflow-hidden transition-[max-height] duration-300 ease-out",
                        open ? "max-h-[80vh]" : "max-h-0",
                    ].join(" ")}
                >
                    <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 pb-4">
                        <nav
                            className="grid gap-1 rounded-xl bg-black/85 p-2 ring-1 ring-white/10 shadow-lg"
                            aria-label="Mobile"
                        >
                            {nav.map((item, idx) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    ref={idx === 0 ? firstLinkRef : undefined}
                                    className="rounded-lg px-3 py-3.5 text-base leading-5 font-medium
                             !text-white hover:!text-white focus:!text-white active:!text-white visited:!text-white
                             hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="mt-2 inline-flex items-center justify-center rounded-xl px-4 py-3.5 text-base font-semibold ring-1 ring-white/20 shadow-sm
                           bg-gradient-to-r from-indigo-500 to-fuchsia-500
                           !text-white hover:!text-white focus:!text-white visited:!text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                            >
                                Hire me
                            </a>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Spacer */}
            <div className="h-16 sm:h-20" />
        </>
    );
}
