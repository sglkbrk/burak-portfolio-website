// import Image from "next/image";
import Banner from '@/sections/Banner';
import About from '@/sections/About';
import MySkills from '@/sections/MySkills';
import Contact from '@/sections/Contact';
import Projects from '@/sections/Projects';

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <MySkills />
      <Projects />
      <Contact />
      {/* <About />
    <Skills />
    <Contact /> */}
    </>
  );
}
