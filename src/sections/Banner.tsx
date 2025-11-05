// import Image from "next/image";

import MotionText from '../components/MotionText';
import MotionDiv from '../components/MotionDiv';
import MotionList from '@/components/MotionList';
import ContactItem from '@/components/ContactItem';
import { faInstagram, faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
export default function Banner() {
  return (
    <section id="banner" className="my-8 flex flex-col items-center justify-center">
      <h1 className="mb-4 text-[1.5rem] md:text-[2rem] font-bold">
        <MotionText delayOffset={0}>Hi, I m Burak Sağlık! 👋</MotionText>
      </h1>
      <MotionDiv>
        <div className="w-[200px] h-[200px]  rounded-full overflow-hidden justify-center items-center ">
          <video
            src="/video.mp4"
            poster="/user.jpeg"
            style={{ objectFit: 'cover', width: '100%', height: '100%', backgroundColor: 'white' }}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Burak Sağlık introduction video"
          ></video>
        </div>
      </MotionDiv>
      <p className="mb-4 text-[1.5rem] md:text-[2rem] font-bold ">
        <MotionDiv delayOffset={0.8}>Developer 🧑‍💻</MotionDiv>
      </p>
      <p className="mb-4 text-[1.7rem] md:text-[2.1rem] font-bold">
        <MotionDiv delayOffset={1}>Photographer 📷</MotionDiv>
      </p>
      <div className="space-y-4">
        <MotionDiv delayOffset={1.1}>
          <p>Welcome to my personal page!</p>
        </MotionDiv>
        <MotionDiv delayOffset={1.2}>
          <p className="text-gray-500 p-3 text-center">
            Creative Frontend Developer 💻 Crafting seamless user experiences with a sprinkle of JavaScript magic.
          </p>
        </MotionDiv>
        <MotionDiv delayOffset={1.2}>
          <MotionList delayOffset={1.3}>
            <ContactItem title="Instagram" icon={faInstagram} bgColor="bg-yellow-500" link="https://www.instagram.com/brksglk" />
            <ContactItem title="Github" icon={faGithub} bgColor="bg-purple-500" link="https://github.com/sglkbrk" />
            <ContactItem title="Linkedin" icon={faLinkedin} bgColor="bg-orange-500" link="https://www.linkedin.com/in/burak-saglik/" />
            <ContactItem title="Mail" icon={faGoogle} bgColor="bg-red-500" link="mailto:sglk.brk@gmail.com" />
          </MotionList>
        </MotionDiv>
      </div>
    </section>
  );
}
