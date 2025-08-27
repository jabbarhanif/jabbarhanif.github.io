// Header.jsx
import { useEffect, useState } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

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

    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = open ? "hidden" : prev || "";
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", onKey);
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
        { label: "Work", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <>
            <div
                className={[
                    "fixed inset-x-0 top-0 z-50",
                    "transition-all duration-300",
                    scrolled ? "backdrop-blur bg-black/60 border-b border-white/10 shadow-lg" : "bg-transparent",
                ].join(" ")}
                style={{ WebkitBackdropFilter: scrolled ? "blur(8px)" : undefined }}
            >
                <header className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6">
                    <div className="flex h-16 sm:h-20 items-center justify-between">
                        <a href="/" className="group inline-flex items-center gap-3" aria-label="Go to homepage">
                            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-md transition-transform group-hover:scale-105">
                                <span className="text-sm font-extrabold tracking-wide">HJ</span>
                            </div>
                            <div className="text-left">
                                <span className="block text-base sm:text-lg font-semibold leading-5">
                                    Hanif Jabbar Ilmi Sumitra
                                </span>
                                <span className="block text-xs sm:text-sm leading-4 text-white/70">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-fuchsia-300">
                                        Creative Software Developer
                                    </span>
                                </span>
                            </div>
                        </a>

                        <nav className="hidden lg:flex items-center gap-2" aria-label="Primary">
                            {nav.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white rounded-md hover:bg-white/5 transition"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="mx-2 h-6 w-px bg-white/10" />
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold ring-1 ring-white/15 shadow-sm transition hover:shadow-md bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white hover:from-indigo-400 hover:to-fuchsia-400"
                            >
                                Hire me
                                <svg width="16" height="16" viewBox="0 0 24 24" className="-mr-0.5" aria-hidden="true">
                                    <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </nav>

                        <button
                            type="button"
                            onClick={() => setOpen((v) => !v)}
                            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-white/15 bg-white/5 hover:bg-white/10"
                            aria-label="Toggle menu"
                            aria-expanded={open}
                            aria-controls="mobile-nav"
                        >
                            <svg className={`transition-transform ${open ? "rotate-90" : ""}`} width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                                {open ? (
                                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                ) : (
                                    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                )}
                            </svg>
                        </button>
                    </div>
                </header>

                <div
                    id="mobile-nav"
                    className={["lg:hidden overflow-hidden transition-[max-height] duration-300 ease-out", open ? "max-h-[70vh]" : "max-h-0"].join(" ")}
                >
                    <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 pb-4">
                        <nav className="grid gap-1" aria-label="Mobile">
                            {nav.map((item) => (
                                <a key={item.href} href={item.href} className="rounded-lg px-3 py-3 text-base font-medium text-white/90 hover:bg-white/5">
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="mt-2 inline-flex items-center justify-center rounded-xl px-4 py-3 text-base font-semibold ring-1 ring-white/15 shadow-sm bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white hover:from-indigo-400 hover:to-fuchsia-400"
                            >
                                Hire me
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="h-16 sm:h-20" />
        </>
    );
}
