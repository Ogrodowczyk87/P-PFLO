import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import rafal from '../assets/rafal.jpg';
import { sectionIds } from '../content/sectionIds';
import {
  fadeUpVariants,
  leftColumnVariants,
  rightColumnVariants,
} from '../lib/src/utils/motionVariants';

const ContactSection = () => {
  const [status, setStatus] = useState({
    submitted: false,
    message: ''
  });
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

  useEffect(() => {
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, [publicKey]);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus({ submitted: true, message: 'Sending...' });

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS is not configured correctly.', {
        hasServiceId: Boolean(serviceId),
        hasTemplateId: Boolean(templateId),
        hasPublicKey: Boolean(publicKey),
      });
      setStatus({
        submitted: true,
        message: 'Email service is not configured. Please try again later.'
      });
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          message: formData.message,
          from_name: formData.user_name,
          from_email: formData.user_email,
          reply_to: formData.user_email,
        },
        publicKey
      );

      setStatus({
        submitted: true,
        message: 'Message sent successfully!'
      });
      setFormData({
        user_name: '',
        user_email: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS send failed.', error);
      const errorMessage = error instanceof Error
        ? error.message
        : typeof error === 'object' && error !== null && 'text' in error
          ? String(error.text)
          : 'Unknown error';

      setStatus({
        submitted: true,
        message: `Failed to send the message. ${errorMessage}`
      });
    }
  };

  return (
    <motion.section
      id={sectionIds.contact}
      className="py-16 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUpVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch">
          <motion.div
            className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden p-8 transition-shadow hover:shadow-lg"
            variants={leftColumnVariants}
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
          </motion.div>

          <motion.div
            className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden p-8 transition-shadow hover:shadow-lg"
            variants={rightColumnVariants}
          >
            <h3 className="text-2xl font-poppins font-bold text-center text-dark-blue mb-6">
              Contact Me
            </h3>
            {status.submitted && (
              <div className={`p-4 rounded-lg mb-4 ${status.message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {status.message}
              </div>
            )}
            <form onSubmit={sendEmail} className="space-y-5">
              <div>
                <label htmlFor="user_name" className="block text-dark-blue font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  value={formData.user_name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, user_name: e.target.value }))}
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
                  value={formData.user_email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, user_email: e.target.value }))}
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
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
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
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
