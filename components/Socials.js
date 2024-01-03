import Link from "next/link";

import {RiInstagramLine, RiLinkedinLine, RiGithubLine} from 'react-icons/ri'

const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg">
    <Link target="_blank" href={'https://www.instagram.com/hhxrsh_/'} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>
    <Link target="_blank" href={'https://www.linkedin.com/in/harsh-upadhyay--/'} className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine />
    </Link>
    <Link target="_blank" href={'https://github.com/haaaarsh4'} className="hover:text-accent transition-all duration-300">
      <RiGithubLine />
    </Link>

  </div>
  );
};

export default Socials;
