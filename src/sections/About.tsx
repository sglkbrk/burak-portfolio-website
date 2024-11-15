// import Image from "next/image";

import MotionDiv from "../components/MotionDiv";
import Image from "next/image";
export default function About() {
  return (
    <section
      id="about"
      className="my-8 md:my-20  flex flex-col   md:flex-row  my-8  md:my-20"
    >
      <div className="flex flex-col  lg:w-2/3 space-y-6 order-2 md:order-1">
        <MotionDiv delayOffset={0.2}>
          <h1 className="text-[1.5rem] md:text-[2rem] font-bold">About Me</h1>
        </MotionDiv>
        <MotionDiv delayOffset={0.4}>
          <p className="text-gray-500 ">
            I graduated as the top of my class from Sivas Cumhuriyet University
            in 2018 with a degree in Management Information Systems 🎓.
          </p>
        </MotionDiv>
        <MotionDiv delayOffset={0.5}>
          <p className="text-gray-500 ">
            I started my career in 2016 at Detaysoft as a Web and Mobile
            Developer. During this time, I gained experience working as a
            Frontend Developer, Mobile Developer, and SAP Fiori Developer,
            contributing to both web and mobile projects.
          </p>
        </MotionDiv>
        <MotionDiv delayOffset={0.6}>
          <p className="text-gray-500 ">
            I develop dynamic applications using modern technologies such as
            React.js and Vue.js, while also creating enterprise solutions with
            SAP Fiori. I continue my professional journey at Detaysoft, aiming
            to add value to my projects by keeping up with technological
            advancements.
          </p>
        </MotionDiv>
      </div>
      <div className="lg:w-1/3 order-1 md:order-2">
        <MotionDiv delayOffset={0.4}>
          <Image
            width={400}
            height={500}
            src="/IMG_0419.jpeg"
            alt="Burak Sağlık"
            className="w-[350px] min-w-[300px] max-h-[400px] object-cover rounded-xl transition-all hover:scale-110 "
          />
        </MotionDiv>
      </div>
    </section>
  );
}
