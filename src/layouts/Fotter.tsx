import { LinkedInIcon } from '../components/LinkedInIcon';
import { GithubIcon } from '../components/GithubIcon';

const Footer = () => {
  return (
    <div className="mb-0">
      <footer className="bg-slate-900 text-white pt-12 pb-8 w-full mb-0 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-poppins font-bold mb-4 text-white">
                About Me
              </h3>
              <p className="text-slate-300 mb-4">
                Junior Frontend Developer based in Belfast with a passion for
                creating modern web experiences using cutting-edge technologies.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-poppins font-bold mb-4 text-white">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#Home"
                    className="text-slate-300 hover:text-accent-yellow transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href='#Skills'
                    className="text-slate-300 hover:text-accent-yellow transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#Projects"
                    className="text-slate-300 hover:text-accent-yellow transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#Contact"
                    className="text-slate-300 hover:text-accent-yellow transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-poppins font-bold mb-4 text-white">
                Contact
              </h3>
              <p className="text-slate-300 mb-2">Belfast, Northern Ireland</p>
              <p className="text-slate-300 mb-4">r.ogrodowczyk87@gmail.com</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/rafal-ogrodowczyk-85648a251/"
                  className="text-slate-300 hover:text-accent-yellow transition-colors"
                >
                  <LinkedInIcon size={24} />
                </a>
                <a
                  href="https://github.com/Ogrodowczyk87"
                  className="text-slate-300 hover:text-accent-yellow transition-colors"
                >
                  <GithubIcon size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Rafal Ogrodowczyk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
