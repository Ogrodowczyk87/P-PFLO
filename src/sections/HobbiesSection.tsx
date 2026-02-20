import { hobbies } from '../content/hobbies';
import { sectionIds } from '../content/sectionIds';

const HobbiesSection = () => {
  return (
    <section
      id={sectionIds.hobbies}
      className="py-16 flex items-center justify-center bg-slate-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-poppins font-bold text-dark-blue text-center mb-12">
          My Hobbies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
          {hobbies.map((hobby) => (
            <div
              key={hobby.id}
              className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 text-center transition-shadow hover:shadow-lg w-full max-w-sm"
            >
              <div className="text-5xl mb-4">{hobby.icon}</div>
              <h3 className="text-xl font-semibold text-dark-blue mb-2">
                {hobby.title}
              </h3>
              <p className="text-slate-700">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
