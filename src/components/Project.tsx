import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faStaylinked, faGithub } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

export default function Project({
  name,
  image,
  projectUrl,
  githubUrl
}: {
  name: string;
  image: string;
  projectUrl: string;
  githubUrl: string;
}) {
  return (
    <div className="group rounded-xl border-none p-5 text-center shadow-none transition-all duration-200 ease-linear hover:scale-110 hover:drop-shadow-xl">
      <div className="flex flex-col items-center gap-2">
        <div className="group relative  overflow-hidden flex items-center  justify-center  w-[160px] h-[160px] rounded-full  border border-black-500">
          <Image fill alt={name} src={image} className="object-cover  object-center" />
          <div className="flex flex-row items-center justify-center z-10 absolute    space-x-6">
            <Link
              target="_blank"
              href={githubUrl || '/'}
              className="text-white text-[11px] font-effra uppercase tracking-6 hidden group-hover:block"
            >
              <FontAwesomeIcon
                className="bg-gray-500  hover:bg-gray-800/90 w-10 h-10 p-2 flex items-center justify-center rounded-full text-white"
                icon={faGithub}
              />
            </Link>
            <Link
              target="_blank"
              href={projectUrl || '/'}
              className="text-white text-[11px] font-effra uppercase tracking-6 hidden group-hover:block"
            >
              <FontAwesomeIcon
                className="bg-yellow-500  hover:bg-yellow-800/90 w-10 h-10 p-2 flex items-center justify-center rounded-full text-white"
                icon={faStaylinked}
              />
            </Link>
          </div>
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}
