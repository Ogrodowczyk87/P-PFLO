import { motion } from 'framer-motion';
import TypeScript from '../assets/TypeScript.svg';
import AWS from '../assets/AWS.svg'
import Github from '../assets/Github.svg';
import tailwind from '../assets/tailwind.svg';
import linux from '../assets/linux.svg';
import react from '../assets/react.svg';
import AI from '../assets/AI.svg';
import { sectionIds } from '../content/sectionIds';
import {
  fadeUpVariants,
  gridStaggerVariants,
  revealCardVariants,
} from '../lib/src/utils/motionVariants';

const SkillsSection = () => {
  return (
    <motion.section
      id={sectionIds.skills}
      className="py-16 pt-[80px] bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUpVariants}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-poppins font-bold text-dark-blue text-center mb-4"
        variants={fadeUpVariants}
      >
        My Skills
      </motion.h2>
      <motion.p className="text-center text-slate-600 mb-10" variants={fadeUpVariants}>
        A focused toolkit for modern, maintainable web applications.
      </motion.p>

      <motion.div
        className="relative h-full w-full flex items-center justify-center"
        variants={gridStaggerVariants}
      >
        <motion.div
          className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-slate-300"
          variants={revealCardVariants}
        >
          <motion.button variants={revealCardVariants} className="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-slate-300 p-[2px] active:scale-95 hover:scale-105 transition-all duration-300">
            <span className="block w-[40px] h-[40px] rounded-full z-[2] bg-white p-1">
              <img src={react} alt="React" />
            </span>
          </motion.button>

          <motion.button variants={revealCardVariants} className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-slate-300 p-[2px] active:scale-95 hover:scale-105 transition-all duration-300">
            <span className="block w-[40px] h-[40px] rounded-full z-[2] bg-white p-1">
              <img className="rounded-full" src={tailwind} alt="Tailwind" />
            </span>
          </motion.button>

          <motion.button variants={revealCardVariants} className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-slate-300 p-[2px] active:scale-95 hover:scale-105 transition-all duration-300">
            <span className="block w-[45px] h-[45px] rounded-full z-[2] bg-slate-50 p-1">
              <img className="rounded-full" src={linux} alt="Linux" />
            </span>
          </motion.button>

          <motion.button variants={revealCardVariants} className="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-slate-300 p-[2px] active:scale-95 hover:scale-105 transition-all duration-300">
            <span className="flex items-center justify-center w-[40px] h-[40px] rounded-full z-[2] bg-blue-50 p-1">
              <img className="block w-full h-full object-contain object-center" src={AWS} alt="AWS" />
            </span>
          </motion.button>

          <motion.button variants={revealCardVariants} className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-slate-300 p-[2px] active:scale-95 hover:scale-105 transition-all duration-300">
            <span className="block w-[40px] h-[40px] rounded-full z-[2] bg-white p-1">
              <img className="rounded-full" src={AI} alt="CSS" />
            </span>
          </motion.button>

          <motion.button variants={revealCardVariants} className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-slate-300 p-[2px] active:scale-95 hover:scale-105 transition-all duration-300">
            <span className="block w-[40px] h-[40px] rounded-full z-[2] bg-white p-1">
              <img className="rounded-full" src={TypeScript} alt="TypeScript" />
            </span>
          </motion.button>

          <motion.button variants={revealCardVariants} className="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-slate-300 p-[2px] active:scale-95 hover:scale-105 transition-all duration-300">
            <span className="block w-[40px] h-[40px] rounded-full z-[2] bg-white p-1">
              <img className="rounded-full" src={Github} alt="GitHub" />
            </span>
          </motion.button>

          <motion.button variants={revealCardVariants} className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-accent-yellow cursor-pointer transition-all duration-300 z-0 border-slate-300">
            <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-105 object-cover transition-all duration-300">
              <span className="w-20 h-20 inline-block">
                <img className="rounded-full animate-spin-slow" src={react} alt="React" />
              </span>
            </div>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SkillsSection;
