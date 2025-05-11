
const Card = () => {
  return (
    <div className="card bg-black rounded-[15px] text-white font-monospace text-sm flex flex-col gap-[5px] w-fit px-[25px] py-[25px]">
      <div className="line flex gap-[15px]">
        <p className="number text-gray-light w-[20px] text-right">1</p>
        <p className="code">
          <span className="text-accent-yellow">public static object</span>
          <span className="text-gray-dark"> GetPersonalInfo</span>
          <span className="text-dark-blue">()</span>
        </p>
      </div>
      <div className="line flex gap-[15px]">
        <p className="number text-gray-light w-[20px] text-right">2</p>
        <p className="code">
          <span className="text-dark-blue">{'{'}</span>
        </p>
      </div>
      <div className="line flex gap-[15px]">
        <p className="number text-gray-light w-[20px] text-right">3</p>
        <p className="code ml-[30px]">
          <span className="text-accent-yellow">return new</span>
        </p>
      </div>
      <div className="line flex gap-[15px]">
        <p className="number text-gray-light w-[20px] text-right">4</p>
        <p className="code ml-[30px]">
          <span className="text-gray-dark">{'{'}</span>
        </p>
      </div>
      <div className="line flex gap-[15px]">
        <p className="number text-gray-light w-[20px] text-right">5</p>
        <p className="code ml-[60px]">
          Nickname <span className="text-accent-yellow">=</span>{' '}
          <span className="text-gray-darker">"Rafal Ogrodowczyk"</span>,
        </p>
      </div>
      <div className="line flex gap-[15px]">
        <p className="number text-gray-light w-[20px] text-right">6</p>
        <p className="code ml-[60px]">
          Hobbies <span className="text-accent-yellow">= new</span>{' '}
          <span className="text-dark-blue italic">List</span>&lt;
          <span className="type text-accent-yellow">string</span>&gt;
        </p>
      </div>
      <div className="line flex gap-[15px]">
        <p className="number text-gray-light w-[20px] text-right">7</p>
        <p className="code ml-[90px]">
          <span className="text-gray-dark">{'{'}</span>
          <span className="text-gray-darkest">
            "Coding"<span className="text-white">,</span> "Building simple
            websites"<span className="text-white">,</span> "New technologies"
          </span>
          <span className="text-gray-dark">{'}'}</span>,
        </p>
      </div>
      <div className="line flex gap-[15px]">
        <p className="number text-gray-light w-[20px] text-right">8</p>
        <p className="code ml-[60px]">
          Languages <span className="text-accent-yellow">= new</span>{' '}
          <span className="text-dark-blue italic">List</span>&lt;
          <span className="type text-accent-yellow">string</span>&gt;
        </p>
      </div>
      <div className="line flex gap-[15px]">
        <p className="number text-gray-light w-[20px] text-right">9</p>
        <p className="code ml-[90px]">
          <span className="text-gray-dark">{'{'}</span>
          <span className="text-gray-darker">
            "Polish (native)"<span className="text-white">,</span> "English B2+"
          </span>
          <span className="text-gray-dark">{'}'}</span>,
        </p>
      </div>
      <div className="line flex gap-[15px]">
        <p className="number text-gray-light w-[20px] text-right">10</p>
        <p className="code ml-[60px]">
          Bio <span className="text-accent-yellow">=</span>{' '}
          <span className="text-gray-darker">"Never Give Up"</span>{' '}
          <span className="text-accent-yellow">+</span>{' '}
          <span className="text-gray-darker">
            "always stay focused on your goals"
          </span>
        </p>
      </div>
      <div className="line flex gap-[15px]">
        <p className="number text-gray-light w-[20px] text-right">11</p>
        <p className="code ml-[30px]">
          <span className="text-gray-dark">{'}'}</span>;
        </p>
      </div>
      <div className="line flex gap-[15px]">
        <p className="number text-gray-light w-[20px] text-right">12</p>
        <p className="code">
          <span className="text-dark-blue">{'}'}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;