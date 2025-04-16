import React from 'react';

const Card = () => {
    return (
        /* From Uiverse.io by kamehame-ha */
        <div className="card bg-[#000000] rounded-[15px] text-white font-monospace text-sm flex flex-col gap-[5px] w-fit px-[25px] py-[25px]">
            <div className="line flex gap-[15px]">
                <p className="number text-white w-[20px] text-right">1</p>
                <p className="code">
                    <span className="text-[#ff79c6]">public static object</span>
                    <span className="text-[#50fa7b]"> GetPersonalInfo</span>
                    <span className="text-[#8be9fd]">()</span>
                </p>
            </div>
            <div className="line flex gap-[15px]">
                <p className="number text-white w-[20px] text-right">2</p>
                <p className="code">
                    <span className="text-[#8be9fd]">{'{'}</span>
                </p>
            </div>
            <div className="line flex gap-[15px]">
                <p className="number text-white w-[20px] text-right">3</p>
                <p className="code ml-[30px]">
                    <span className="text-[#ff79c6]">return new</span>
                </p>
            </div>
            <div className="line flex gap-[15px]">
                <p className="number text-white w-[20px] text-right">4</p>
                <p className="code ml-[30px]">
                    <span className="text-[#50fa7b]">{'{'}</span>
                </p>
            </div>
            <div className="line flex gap-[15px]">
                <p className="number text-white w-[20px] text-right">5</p>
                <p className="code ml-[60px]">
                    Nickname <span className="text-[#ff79c6]">=</span>{' '}
                    <span className="text-[#f1fa8c]">"Rafal Ogrodowczyk</span>,
                </p>
            </div>
            <div className="line flex gap-[15px]">
                <p className="number text-white w-[20px] text-right">6</p>
                <p className="code ml-[60px]">
                    Hobbies <span className="text-[#ff79c6]">= new</span>{' '}
                    <span className="text-[#8be9fd] italic">List</span>&lt;
                    <span className="type text-[#ff79c6]">string</span>&gt;
                </p>
            </div>
            <div className="line flex gap-[15px]">
                <p className="number text-white w-[20px] text-right">7</p>
                <p className="code ml-[90px]">
                    <span className="text-[#bd93f9]">{'{'}</span>
                    <span className="text-[#f1fa8c]">
                        "Coding"<span className="text-white">,</span> "Building simple
                        webiste"<span className="text-white">,</span> "New technologies"
                    </span>
                    <span className="text-[#bd93f9]">{'}'}</span>,
                </p>
            </div>
            <div className="line flex gap-[15px]">
                <p className="number text-white w-[20px] text-right">8</p>
                <p className="code ml-[60px]">
                    Languages <span className="text-[#ff79c6]">= new</span>{' '}
                    <span className="text-[#8be9fd] italic">List</span>&lt;
                    <span className="type text-[#ff79c6]">string</span>&gt;
                </p>
            </div>
            <div className="line flex gap-[15px]">
                <p className="number text-white w-[20px] text-right">9</p>
                <p className="code ml-[90px]">
                    <span className="text-[#bd93f9]">{'{'}</span>
                    <span className="text-[#f1fa8c]">
                        "Polish (native)"<span className="text-white">,</span> "English B2+"
                    </span>
                    <span className="text-[#bd93f9]">{'}'}</span>,
                </p>
            </div>
            <div className="line flex gap-[15px]">
                <p className="number text-white w-[20px] text-right">10</p>
                <p className="code ml-[60px]">
                    Bio <span className="text-[#ff79c6]">=</span>{' '}
                    <span className="text-[#f1fa8c]">"Never Give Up"</span>{' '}
                    <span className="text-[#ff79c6]">+</span>{' '}
                    <span className="text-[#f1fa8c]">
                        "always stay focused on your goals"
                    </span>
                </p>
            </div>
            <div className="line flex gap-[15px]">
                <p className="number text-white w-[20px] text-right">11</p>
                <p className="code ml-[30px]">
                    <span className="text-[#50fa7b]">{'}'}</span>;
                </p>
            </div>
            <div className="line flex gap-[15px]">
                <p className="number text-white w-[20px] text-right">12</p>
                <p className="code">
                    <span className="text-[#8be9fd]">{'}'}</span>
                </p>
            </div>
        </div>
    );
};

export default Card;

