import Card from '../components/card';
import { AnimateSvg } from '../components/AnimateSvg';
import { InstagramIcon } from '../components/InstagramIcon';
import { LinkedInIcon } from '../components/LinkedInIcon';
import { GithubIcon } from '../components/GithubIcon';
import { MailsIcon } from '../components/MailsIcon';

const Home = () => {
  return (
    <div
      id="Home"
      className="flex items-start justify-center xl:pl-[110px] xl:pr-[40px] py-12 relative bg-slate-50"
    >
      <div className="container bg-white border border-slate-200 shadow-sm rounded-2xl p-8 md:p-10 mt-[60px] mb-[60px] transition-shadow hover:shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <Card className="shadow-sm rounded-xl p-6 bg-slate-50 border border-slate-200" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-sm text-slate-600 mb-4">
              Open to collaboration • Belfast, Northern Ireland
            </div>
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-dark-blue mb-4">
              Rafal Ogrodowczyk | Junior Frontend Developer
            </h1>
            <p className="text-lg md:text-xl font-open-sans text-slate-700 leading-relaxed">
              Hi, I'm Rafal Ogrodowczyk, a passionate Junior Frontend Developer based in Belfast. I have a deep enthusiasm for new technologies and enjoy creating modern web experiences. With dedication to clean code and user-friendly interfaces, I'm constantly expanding my skills in the ever-evolving tech landscape.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start mt-6 gap-4">
              <a
                href="#Projects"
                className="inline-flex items-center justify-center rounded-lg bg-dark-blue px-5 py-3 text-white font-medium transition-colors hover:bg-accent-yellow"
              >
                View Projects
              </a>
              <a
                href="#Contact"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-dark-blue font-medium transition-colors hover:border-accent-yellow hover:text-accent-yellow"
              >
                Contact Me
              </a>
            </div>
            <div className="flex justify-center md:justify-start mt-6 space-x-4">
              <a
                href="https://www.instagram.com/zastrzyk_87/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-accent-yellow transition-colors"
              >
                <InstagramIcon size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rafal-ogrodowczyk-85648a251/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-accent-yellow transition-colors"
              >
                <LinkedInIcon size={24} />
              </a>
              <a
                href="https://github.com/Ogrodowczyk87"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-accent-yellow transition-colors"
              >
                <GithubIcon size={24} />
              </a>
              <a
                href="mailto:r.ogrodowczyk87@gmail.com"
                className="text-slate-600 hover:text-accent-yellow transition-colors"
              >
                <MailsIcon size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animowana strzałka na dole wskazująca na Skills - bardziej na środku */}
      <div className=" absolute bottom-0 left-[60%] transform -translate-x-1/2 translate-y-8 md:translate-y-[48px] lg:translate-y-[50px] flex flex-col items-center">
        {/* Tekst "Check my skills" */}


        {/* Animowana strzałka */}
        <a href="#Skills" className="cursor-pointer group">
          <div className="w-32 h-24 opacity-70 group-hover:opacity-100 transition-opacity transform rotate-180">
            <AnimateSvg
              width="120%"
              height="120%"
              viewBox="0 0 127 101"
              className="my-svg-animation"
              path="M3 94.6748C27.4641 99.4874 46.3246 102.55 65.0444 83.8304C73.9796 74.8953 76.1503 62.8261 69.8444 51.4748C58.3692 30.8185 36.6188 61.9308 52.6 71.9193C81.897 90.2303 107.995 53.7887 112.155 28.3637C113.368 20.9544 114.609 12.5035 115 5.07481C115.339 -1.36878 117.032 6.28246 117.844 8.63037C119.35 12.9801 121.884 16.4674 123.356 20.7192C125.931 28.1593 122.746 21.3428 121.755 17.8748C118.913 7.92667 118.724 -1.31665 108.6 8.27481C106.563 10.205 95.3631 19.2352 97.3999 19.4748C103.175 20.1542 109.598 23.9571 115 24.2748C122.394 24.7098 126.464 27.2512 116.6 22.3192C113.382 20.71 110.214 19.6588 107 18.2304C101.703 15.8763 109.23 17.7389 109.844 18.2304C111.629 19.6579 116.523 20.3297 111.8 18.2304C110.584 17.6899 105.386 16.2748 107 16.2748C112.097 16.2748 118.803 21.3653 116.956 17.8748C115.403 14.9415 113.389 14.4872 110.2 14.6748C109.114 14.7386 105.166 17.8748 107 17.8748"
              strokeColor="#000000"
              strokeWidth={6}
              strokeLinecap="round"
              animationDuration={4.1}
              animationDelay={0.2}
              animationBounce={0.2}
              reverseAnimation={false}
              enableHoverAnimation={true}
              // hoverAnimationType="color"
              // hoverStrokeColor="#fbbf24"
              initialAnimation={true}
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
