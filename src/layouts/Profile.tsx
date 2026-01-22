import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import rafal from '../assets/rafal.jpg';

const Profile = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState({
    submitted: false,
    message: ''
  });

    useEffect(() => {
    emailjs.init('8YqCDLsr_FXl4g2Ey');
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus({ submitted: true, message: 'Sending...' });

    if (form.current) {
      emailjs.sendForm(
        'service_n94uv5g',
        'template_ivty839',
        form.current,
        '8YqCDLsr_FXl4g2Ey'  
      )
        .then(() => {
          setStatus({
            submitted: true,
            message: 'Message sent successfully!'
          });
          form.current?.reset();
        }, () => {
          setStatus({
            submitted: true,
            message: 'Failed to send the message. Try again later.'
          });
        });
    }
  };

  return (
    <div id="Contact" className="py-16 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch">
          <div
            className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden p-8 transition-shadow hover:shadow-lg"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={rafal}
                alt="Profile"
                className="w-32 h-32 rounded-full mb-6 md:w-40 md:h-40 xl:w-48 xl:h-48 mt-6 ring-4 ring-white shadow-md"
              />
              <h3 className="text-3xl md:text-4xl font-poppins font-bold text-dark-blue">
                Rafal Ogrodowczyk
              </h3>
              <p className="text-slate-700 text-lg md:text-xl mt-4 max-w-md">
                Feel free to reach out to me for collaboration or inquiries.
              </p>
              <div className="mt-6 w-16 h-1 rounded-full bg-accent-yellow"></div>
            </div>
          </div>

          <div
            className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden p-8 transition-shadow hover:shadow-lg"
          >
            <h3 className="text-2xl font-poppins font-bold text-center text-dark-blue mb-6">
              Contact Me
            </h3>
            {status.submitted && (
              <div className={`p-4 rounded-lg mb-4 ${status.message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {status.message}
              </div>
            )}
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label htmlFor="user_name" className="block text-dark-blue font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  className="w-full border border-light-gray rounded-lg p-3 bg-slate-50 focus:outline-none focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-dark-blue font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  className="w-full border border-light-gray rounded-lg p-3 bg-slate-50 focus:outline-none focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-dark-blue font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full border border-light-gray rounded-lg p-3 bg-slate-50 focus:outline-none focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow"
                  placeholder="Your Message"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-dark-blue text-white font-medium py-3 rounded-lg hover:bg-accent-yellow transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
