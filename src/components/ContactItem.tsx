import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import Link from 'next/link';
export default function ContactItem({
  title,
  icon,
  iconColor = 'white',
  bgColor = 'yellow-500',
  link = '/'
}: {
  title: string;
  icon: IconDefinition;
  iconColor?: string;
  bgColor?: string;
  link?: string;
}) {
  return (
    <Link target="_blank" href={link} className="group  w-12 h-20  flex flex-col justify-end items-center">
      <p className="hidden group-hover:block text-[12px]  uppercase tracking-6 mb-1">{title}</p>
      <FontAwesomeIcon
        className={`${bgColor} hover:${bgColor}/90 w-12 h-12 p-2 flex items-center justify-center rounded-full text-white`}
        icon={icon}
        style={{ color: iconColor }}
      />
    </Link>
  );
}
