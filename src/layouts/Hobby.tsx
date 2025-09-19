import { hobbies } from '../data/hobbiesData.tsx';

const Hobby = () => {
  console.log('Hobbies data:', hobbies);
  console.log('Number of hobbies:', hobbies.length);

  return (
    <div
      id="Hobby"
      className="py-16 flex items-center justify-center bg-slate-200"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-poppins font-bold text-dark-blue text-center mb-12">
          My Hobbies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
          {hobbies.map((hobby) => (
            <div
              key={hobby.id}
              className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform hover:scale-105 hover:shadow-2xl w-full max-w-sm"
            >
              <div className="text-5xl mb-4">{hobby.icon}</div>
              <h3 className="text-xl font-semibold text-dark-blue mb-2">
                {hobby.title}
              </h3>
              <p className="text-dark-blue">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobby;