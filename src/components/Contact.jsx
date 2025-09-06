import { MessageCircle, Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <>
            {/* Optional: supaya link #contact tidak dead link */}
            <section id="contact" className="not-prose text-white">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-2xl sm:text-3xl font-bold">Contact</h2>
                    <p className="mt-2 text-white/80">
                        Butuh bantuan atau ingin kolaborasi? Silakan hubungi salah satu kanal di bawah.
                    </p>

                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {/* WhatsApp */}
                        <li>
                            <a
                                href="https://wa.me/6281232461759"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between rounded-2xl px-4 py-3 ring-1 ring-white/15 bg-white/5 hover:bg-white/10 transition
                           min-h-[44px] touch-manipulation
                           !text-white hover:!text-white visited:!text-white focus:!text-white
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                                aria-label="WhatsApp"
                            >
                                <span className="flex items-center gap-3">
                                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                                    <span className="font-semibold !text-white">WhatsApp</span>
                                </span>
                                <span className="text-sm text-white/70 group-hover:text-white/90">+62 812-3246-1759</span>
                            </a>
                        </li>

                        {/* Email */}
                        <li>
                            <a
                                href="mailto:jabb.jbr@gmail.com"
                                className="group flex items-center justify-between rounded-2xl px-4 py-3 ring-1 ring-white/15 bg-white/5 hover:bg-white/10 transition
                           min-h-[44px] touch-manipulation
                           !text-white hover:!text-white visited:!text-white focus:!text-white
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                                aria-label="Email"
                            >
                                <span className="flex items-center gap-3">
                                    <Mail className="h-5 w-5" aria-hidden="true" />
                                    <span className="font-semibold !text-white">Email</span>
                                </span>
                                <span className="text-sm text-white/70 group-hover:text-white/90">jabb.jbr@gmail.com</span>
                            </a>
                        </li>

                        {/* LinkedIn */}
                        {/* <li>
                            <a
                                href="https://www.linkedin.com/in/jabbar-08aab3261"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between rounded-2xl px-4 py-3 ring-1 ring-white/15 bg-white/5 hover:bg-white/10 transition
                           min-h-[44px] touch-manipulation
                           !text-white hover:!text-white visited:!text-white focus:!text-white
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                                aria-label="LinkedIn"
                            >
                                <span className="flex items-center gap-3">
                                    <Linkedin className="h-5 w-5" aria-hidden="true" />
                                    <span className="font-semibold !text-white">LinkedIn</span>
                                </span>
                                <span className="text-sm text-white/70 group-hover:text-white/90">@jabbar-08aab3261</span>
                            </a>
                        </li> */}

                        {/* GitHub */}
                        <li>
                            <a
                                href="https://github.com/jabbarhanif"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between rounded-2xl px-4 py-3 ring-1 ring-white/15 bg-white/5 hover:bg-white/10 transition
                           min-h-[44px] touch-manipulation
                           !text-white hover:!text-white visited:!text-white focus:!text-white
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                                aria-label="GitHub"
                            >
                                <span className="flex items-center gap-3">
                                    <Github className="h-5 w-5" aria-hidden="true" />
                                    <span className="font-semibold !text-white">GitHub</span>
                                </span>
                                <span className="text-sm text-white/70 group-hover:text-white/90">@jabbarhanif</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}
