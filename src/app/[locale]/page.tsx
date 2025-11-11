import dynamic from 'next/dynamic';
import Hero from "@/components/home/Hero";

// Lazy load components that are below the fold
const About = dynamic(() => import("@/components/home/About"), {
  loading: () => <div className="h-screen" />,
});
const Services = dynamic(() => import("@/components/home/Services"), {
  loading: () => <div className="h-screen" />,
});
const Projects = dynamic(() => import("@/components/home/Projects"), {
  loading: () => <div className="h-screen" />,
});
const CTA = dynamic(() => import("@/components/home/CTA"), {
  loading: () => <div className="h-64" />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <CTA />
    </>
  );
}
