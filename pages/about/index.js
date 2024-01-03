// icons
import CIcon from "../../components/CIcon";

import { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaGithub,
  FaLinux,
  FaPython,
  FaJava
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiVisualstudiocode,
  SiJupyter,
  SiEclipseide,
  SiHaskell
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Programming',
        icons: [
          <FaPython key="python" />,
          <FaJava key="java" />,
          <CIcon key="cIcon" />,
          <SiHaskell key="haskell" />,
        ],
      },
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: 'Development tools',
        icons: [
          <SiVisualstudiocode key="vscode" />,
          <FaGithub key="github" />,
          <FaLinux key="linux" />,
          <SiJupyter key="jupyter" />,
          <SiEclipseide key="eclipse" />,
        ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: "Duke of Edinburgh's International Award",
        stage: '2022 - Present',
      },
      {
        title: 'Global Innovation Challenge - Silver',
        stage: '2022',
      },
      {
        title: 'Shastra Pratibha Contest - Finalist',
        stage: '2022',
      },
    ],
  },
  {
    title: 'certifications',
    info: [
      {
        title: 'Elements of AI - University of Helsinki',
        stage: '2022',
      },
      {
        title: 'Engineering Virtual Program - Goldman Sachs',
        stage: '2022',
      },
      {
        title: 'Introduction to Cybersecurity - Cisco Networking Academy',
        stage: '2022',
      },
      
    ],
  },
];

import Circles from '../../components/Circles'
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

// ... (your imports)

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="h2 text-accent">Hey there!</h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
          {`I'm a dedicated computer science student at`} <strong className=" font-bold">McMaster University</strong> with a passion for with a passion for Full Stack Development and Software Engineering. Exploring the intersections of technology and innovation fuels my curiosity and drive. <br /> I am currently actively seeking internships for Summer 2024, here have a look at my <a href="Harsh_Upadhyay_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-50 underline hover:text-blue-100">Resume</a>.          </p>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px] xl:pt-24">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div>{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;