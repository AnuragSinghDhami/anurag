import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import CodingProfiles from "@/components/coding-profiles";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
// import ContributionsGraph from "@/components/GitHubCalendar";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <CodingProfiles />
      <Skills />
      {/* <ContributionsGraph username="AnuragSinghDhami" /> */}
      <Experience />
      <Contact />
    </main>
  );
}
