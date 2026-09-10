import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import QuickFacts from './sections/QuickFacts';
import DualOverview from './sections/DualOverview';
import About from './sections/About';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Experience from './sections/Experience';
import WhyMe from './sections/WhyMe';
import ResumeCta from './sections/ResumeCta';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [modalProject, setModalProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans">
      {/* Sticky Clean White Navbar */}
      <Navbar />

      <main>
        {/* 1. Hero Section (Reference Composition: Panoramic Dark Navy, Anubha Desk Portrait, Script Overlay & Traits) */}
        <Hero />

        {/* 2. Quick Highlights (4 White Cards: MCA Student 9.12, Aspiring Dev, Focused, Open to Opportunities) */}
        <QuickFacts />

        {/* 3. Dual Overview: Side-by-Side Featured Projects + Circular Skills & Tools + Quote Ribbon */}
        <DualOverview onSelectProject={(p) => setModalProject(p)} />

        {/* 4. About Section: "More than code. Building with purpose." */}
        <About />

        {/* 5. In-Depth Featured Projects Showcase with Interactive Mockups */}
        <Projects onSelectProject={(p) => setModalProject(p)} />

        {/* 6. Education Vertical Timeline: MCA at LPU (CGPA: 9.12), BCA (82%), 12th (73%) */}
        <Education />

        {/* 7. Comprehensive Skills Ecosystem */}
        <Skills />

        {/* 8. Verified Credentials & Certifications */}
        <Certifications />

        {/* 9. Practical Engineering Journey / Hands-On Experience */}
        <Experience />

        {/* 10. Recruiter Perspective: "Why Anubha?" */}
        <WhyMe />

        {/* 11. Dark Resume CTA Section */}
        <ResumeCta />

        {/* 12. Contact Section */}
        <Contact />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Global Project Detail Modal */}
      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </div>
  );
}
