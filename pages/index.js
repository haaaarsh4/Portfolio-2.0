import Image from "next/image"

import ParticlesContainer from '../components/ParticlesContainer'

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

const Home = () => {
  return (
  <div className="bg-primary/60 h-full ">
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10"> 
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto ">
        <motion.h1 
        variants={fadeIn('down', 0.2)} 
        initial="hidden" 
        animate="show" 
        exit="hidden"        
        className="h1">
          {`Hey I'm`} <br /> <span className="text-accent ">Harsh Upadhyay</span>
        </motion.h1>
        <motion.p
        variants={fadeIn('down', 0.3)} 
        initial="hidden" 
        animate="show" 
        exit="hidden"        
        className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-white"
        >
        Dive in to get a feel for who I am and what {`I'm`} all about. Click around to check out my projects, see the skills I bring to the table, and be sure to connect with me or drop a message. Whether {`you're`} here for inspiration, collaboration, or just a casual browse, {`I'm`} excited to have you along. Ready to explore?
        </motion.p>
      </div>
    </div>
    <div className="w-[1200px] h-full absolute right-0 bottom-0">
      <div>
        <ParticlesContainer /> 
      </div>
    </div>
  </div>);
};

export default Home;
