import JavaScript from '../assets/JavaScript.svg';
import TypeScript from '../assets/TypeScript.svg';
import css from '../assets/css.svg';
import Github from '../assets/Github.svg';
import tailwind from '../assets/tailwind.svg';
import linux from '../assets/linux.svg';
import react from '../assets/react.svg';
import AI from '../assets/AI.svg';

const Skills = () => {
  return (
    <div id="Skills" className=" py-16  pt-[80px]">
      <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dark-blue text-center mb-12">
        My Skills
      </h2>

      <div className="relative h-full w-full flex items-center justify-center">
        <div className="profileCard_container relative p-10 border-4 border-dashed rounded-full border-gray-dark">
          <button className="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-dark p-[2px] active:scale-95 hover:scale-105 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img src={react} alt="React" />
            </span>
          </button>

          <button className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-dark p-[2px] active:scale-95 hover:scale-105 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img className="rounded-full" src={tailwind} alt="Tailwind" />
            </span>
          </button>

          <button className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-dark p-[2px] active:scale-95 hover:scale-105 transition-all duration-500">
            <span className="block w-[45px] h-[45px] transition-all duration-500 rounded-full z-[2] bg-light-gray p-1">
              <img className="rounded-full" src={linux} alt="Linux" />
            </span>
          </button>

          <button className="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-dark p-[2px] active:scale-95 hover:scale-105 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-accent-yellow p-1">
              <img className="rounded-full" src={JavaScript} alt="JavaScript" />
            </span>
          </button>

          <button className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-dark p-[2px] active:scale-95 hover:scale-105 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img className="rounded-full" src={AI} alt="CSS" />
            </span>
          </button>

          <button className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-dark p-[2px] active:scale-95 hover:scale-105 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img className="rounded-full" src={TypeScript} alt="TypeScript" />
            </span>
          </button>

          <button className="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-dark p-[2px] active:scale-95 hover:scale-105 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img className="rounded-full" src={Github} alt="GitHub" />
            </span>
          </button>

          <button className="profile_item w-[200px] h-[200px] p-1 border-4 rounded-full hover:border-accent-yellow cursor-pointer transition-all duration-500 z-0">
            <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-105 object-cover transition-all duration-500">
              <span className="w-20 h-20 inline-block">
                <img className="rounded-full animate-spin-slow" src={react} alt="React" />
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;