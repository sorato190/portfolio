import Skills from "./03_skills";
import Qualification from "./02_qualification";
import Profile from "./01_profile";
import Site from "./04_site";
import Reveal from "@/components/layouts/reveal";

export default function Landing() {
  return (
    <>
      <Reveal>
        <Profile />
      </Reveal>
      <Reveal delay={0.05}>
        <Qualification />
      </Reveal>
      <Reveal delay={0.1}>
        <Skills />
      </Reveal>
      <Reveal delay={0.1}>
        <Site />
      </Reveal>
    </>
  );
}
