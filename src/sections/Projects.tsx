import { a } from 'framer-motion/client';
import MotionDiv from '../components/MotionDiv';
import Project from '@/components/Project';
export default function Projects() {
  const projects = [
    {
      name: 'Goalio',
      image: '/Goalio.jpg',
      appStoreUrl: 'https://apps.apple.com/tr/app/goalio/id6749142434?l=tr'
    },
    {
      name: 'Vue Chat',
      image: '/chat.png',
      githubUrl: 'https://github.com/sglkbrk/sinnalR-Chat-vueapp',
      projectUrl: 'https://chat.buraksaglik.com/'
    },
    {
      name: 'Next Gallery',
      image: '/gallery.png',
      githubUrl: 'https://github.com/sglkbrk/next-photo-gallery',
      projectUrl: 'https://gallery.buraksaglik.com/'
    },
    {
      name: 'Personal Portfolio',
      image: '/portfolio.png',
      githubUrl: 'https://github.com/sglkbrk/burak-portfolio-website',
      projectUrl: 'https://buraksaglik.com/'
    },
    {
      name: 'Bs Note',
      image: '/bsnote.png',
      githubUrl: 'https://github.com/sglkbrk/bsnotes',
      projectUrl: 'https://bsnote.buraksaglik.com/'
    },
    {
      name: 'Blog',
      image: '/blog.png',
      githubUrl: 'https://github.com/sglkbrk',
      projectUrl: 'https://blog.buraksaglik.com/'
    }
  ];
  return (
    <section className="my-4 mb-28 flex flex-col items-center gap-5 text-center md:mt-8" id="Projects">
      <div className="text-center my-8">
        <MotionDiv delayOffset={0}>
          <h2 className="text-3xl font-semibold mb-6">My Projects</h2>
        </MotionDiv>

        <MotionDiv delayOffset={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* <MotionList delayOffset={0.2}> */}
            {projects.map((project) => (
              <Project
                key={project.name}
                name={project.name}
                image={project.image}
                githubUrl={project.githubUrl}
                projectUrl={project.projectUrl}
                appStoreUrl={project.appStoreUrl}
                playStoreUrl={project.playStoreUrl}
              />
            ))}
            {/* </MotionList> */}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
