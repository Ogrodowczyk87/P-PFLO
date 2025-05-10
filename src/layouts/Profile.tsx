import { useRef } from 'react';
import rafal from '../assets/rafal.jpg';

const Profile = () => {

  // EmailJS npm install @emailjs/browser
  const form = useRef()
  const [status, setStatus] = useState({
    submitting: false,
    message: '',
  })


  const sendEmail = (e) => {
    e.preventDefault()
    setStatus({ submitting: true, message: '' })

    emailjs
      .sendForm(
        'service_id',
        'template_id',
        form.current,
        'public_key'
      ).then((result) => {
        setStatus({
          submitting: false,
          message: 'Email sent successfully! I will get back to you soon.',
        })
      }

    )
  }, (error) => {
    setStatus({
      submitting: true,
      message: 'Error sending email. Please try again later.',
    })
  }


  return (
    <div id="Contact" className=" py-16 border-t-2 border-dark-blue">
      <div className="container mx-auto px-4">
        {/* Profile and Contact Form Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Profile Section */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8 transform transition-transform hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center">
              <img
                src={rafal}
                alt="Profile"
                className="w-32 h-32 rounded-full mb-4 md:w-40 md:h-40 xl:w-48 xl:h-48 mt-8 shadow-md"
              />
              <h3 className="text-4xl font-poppins font-bold text-dark-blue">
                Rafal Ogrodowczyk
              </h3>
              <p className="text-black text-center text-lg md:text-xl mt-5">
                Feel free to reach out to me for collaboration or inquiries!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8 transform transition-transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-poppins font-bold text-center text-dark-blue mb-6">
              Contact Me
            </h3>
            {status.submitted && (
               <div className={`p-4 rounded-lg mb-4 ${status.message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
               {status.message}
             </div>
            )}
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-dark-blue font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-light-gray rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-dark-blue font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-light-gray rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-dark-blue font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full border border-light-gray rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-dark-blue text-white font-medium py-3 rounded-lg hover:bg-accent-yellow transition-all"
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