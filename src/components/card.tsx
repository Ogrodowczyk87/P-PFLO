
const Card = () => {
  return (
    <div className="card group relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl text-white font-mono text-sm flex flex-col gap-2 w-fit px-8 py-8 shadow-2xl border border-gray-700 hover:border-blue-500 transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20 backdrop-blur-sm">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500 -z-10"></div>

      <div className="line flex gap-4 hover:bg-gray-800/30 rounded-md px-2 py-1 transition-colors duration-200">
        <p className="number text-gray-400 w-6 text-right font-semibold select-none">1</p>
        <p className="code">
          <span className="text-yellow-400 font-bold">public static object</span>
          <span className="text-gray-300"> GetPersonalInfo</span>
          <span className="text-blue-400">()</span>
        </p>
      </div>
      <div className="line flex gap-4 hover:bg-gray-800/30 rounded-md px-2 py-1 transition-colors duration-200">
        <p className="number text-gray-400 w-6 text-right font-semibold select-none">2</p>
        <p className="code">
          <span className="text-blue-400">{'{'}</span>
        </p>
      </div>
      <div className="line flex gap-4 hover:bg-gray-800/30 rounded-md px-2 py-1 transition-colors duration-200">
        <p className="number text-gray-400 w-6 text-right font-semibold select-none">3</p>
        <p className="code ml-8">
          <span className="text-yellow-400 font-bold">return new</span>
        </p>
      </div>
      <div className="line flex gap-4 hover:bg-gray-800/30 rounded-md px-2 py-1 transition-colors duration-200">
        <p className="number text-gray-400 w-6 text-right font-semibold select-none">4</p>
        <p className="code ml-8">
          <span className="text-gray-300">{'{'}</span>
        </p>
      </div>
      <div className="line flex gap-4 hover:bg-gray-800/30 rounded-md px-2 py-1 transition-colors duration-200">
        <p className="number text-gray-400 w-6 text-right font-semibold select-none">5</p>
        <p className="code ml-16">
          Nickname <span className="text-yellow-400 font-bold">=</span>{' '}
          <span className="text-green-400">"Rafal Ogrodowczyk"</span>,
        </p>
      </div>
      <div className="line flex gap-4 hover:bg-gray-800/30 rounded-md px-2 py-1 transition-colors duration-200">
        <p className="number text-gray-400 w-6 text-right font-semibold select-none">6</p>
        <p className="code ml-16">
          Hobbies <span className="text-yellow-400 font-bold">= new</span>{' '}
          <span className="text-blue-400 italic">List</span>&lt;
          <span className="type text-purple-400">string</span>&gt;
        </p>
      </div>
      <div className="line flex gap-4 hover:bg-gray-800/30 rounded-md px-2 py-1 transition-colors duration-200">
        <p className="number text-gray-400 w-6 text-right font-semibold select-none">7</p>
        <p className="code ml-24">
          <span className="text-gray-300">{'{'}</span>
          <span className="text-green-400">
            "Coding"<span className="text-white">,</span> "Building simple
            websites"<span className="text-white">,</span> "New technologies"
          </span>
          <span className="text-gray-300">{'}'}</span>,
        </p>
      </div>
      <div className="line flex gap-4 hover:bg-gray-800/30 rounded-md px-2 py-1 transition-colors duration-200">
        <p className="number text-gray-400 w-6 text-right font-semibold select-none">8</p>
        <p className="code ml-16">
          Languages <span className="text-yellow-400 font-bold">= new</span>{' '}
          <span className="text-blue-400 italic">List</span>&lt;
          <span className="type text-purple-400">string</span>&gt;
        </p>
      </div>
      <div className="line flex gap-4 hover:bg-gray-800/30 rounded-md px-2 py-1 transition-colors duration-200">
        <p className="number text-gray-400 w-6 text-right font-semibold select-none">9</p>
        <p className="code ml-24">
          <span className="text-gray-300">{'{'}</span>
          <span className="text-green-400">
            "Polish (native)"<span className="text-white">,</span> "English B2+"
          </span>
          <span className="text-gray-300">{'}'}</span>,
        </p>
      </div>
      <div className="line flex gap-4 hover:bg-gray-800/30 rounded-md px-2 py-1 transition-colors duration-200">
        <p className="number text-gray-400 w-6 text-right font-semibold select-none">10</p>
        <p className="code ml-16">
          Bio <span className="text-yellow-400 font-bold">=</span>{' '}
          <span className="text-green-400">"Never Give Up"</span>{' '}
          <span className="text-yellow-400 font-bold">+</span>{' '}
          <span className="text-green-400">
            "always stay focused on your goals"
          </span>
        </p>
      </div>
      <div className="line flex gap-4 hover:bg-gray-800/30 rounded-md px-2 py-1 transition-colors duration-200">
        <p className="number text-gray-400 w-6 text-right font-semibold select-none">11</p>
        <p className="code ml-8">
          <span className="text-gray-300">{'}'}</span>;
        </p>
      </div>
      <div className="line flex gap-4 hover:bg-gray-800/30 rounded-md px-2 py-1 transition-colors duration-200">
        <p className="number text-gray-400 w-6 text-right font-semibold select-none">12</p>
        <p className="code">
          <span className="text-blue-400">{'}'}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;