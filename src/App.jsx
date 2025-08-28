// App.jsx
import { lazy, Suspense, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

const Projects = lazy(() => import("./components/Projects"));

function SectionContainer({ id, children }) {
  return (
    <section id={id} className="scroll-mt-16 sm:scroll-mt-20">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export default function App() {
  // cegah browser auto restore scroll posisi
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0); // selalu ke atas saat pertama render
  }, []);

  // smooth scroll saat klik anchor link (#about, #contact, dll)
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const el = document.querySelector(a.getAttribute("href"));
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", a.getAttribute("href"));
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // kalau ada hash di URL (#about, #contact), scroll ke sana
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-indigo-500/30 selection:text-white overflow-x-hidden antialiased">
      <Header />
      <main id="main" className="relative">

        <SectionContainer id="about">
          <About />
        </SectionContainer>

        {/* Optional: supaya link Contact tidak dead link */}

        <SectionContainer id="contact">
          <Contact />
        </SectionContainer>
        {/* 
        <SectionContainer id="contact">
          <div className="text-white/80">
            <h2 className="text-2xl sm:text-3xl font-bold">Contact</h2>
            <p className="mt-2">Email: you@example.com</p>
          </div>
        </SectionContainer> */}
        <SectionContainer id="projects">
          <Suspense
            fallback={
              <div className="py-16">
                <div className="h-8 w-40 rounded bg-white/10 animate-pulse mb-6" />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="rounded-2xl ring-1 ring-white/10 overflow-hidden">
                      <div className="aspect-[4/3] bg-white/5 animate-pulse" />
                      <div className="p-4 space-y-2">
                        <div className="h-4 w-2/3 bg-white/10 rounded" />
                        <div className="h-4 w-1/2 bg-white/10 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            }
          >
            <Projects />
          </Suspense>
        </SectionContainer>

        <SectionContainer id="experience">
          <Experience />
        </SectionContainer>

      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
