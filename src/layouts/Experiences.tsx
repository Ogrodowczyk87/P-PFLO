import React from 'react';

const experiences = [
    {
        id: 1,
        title: 'Frontend Developer Intern',
        company: 'Tech Solutions',
        duration: 'Jan 2023 - Jun 2023',
        description:
            'Worked on building responsive web applications using React and Tailwind CSS. Collaborated with designers and backend developers to deliver high-quality projects.',
    },
    {
        id: 2,
        title: 'Freelance Web Developer',
        company: 'Self-Employed',
        duration: 'Jul 2023 - Present',
        description:
            'Developed custom websites for small businesses, focusing on performance, SEO, and user experience.',
    },
    {
        id: 3,
        title: 'Freelance Web Developer',
        company: 'Self-Employed',
        duration: 'Jul 2023 - Present',
        description:
            'Developed custom websites for small businesses, focusing on performance, SEO, and user experience.',
    },
    {
        id: 4,
        title: 'Freelance Web Developer',
        company: 'Self-Employed',
        duration: 'Jul 2023 - Present',
        description:
            'Developed custom websites for small businesses, focusing on performance, SEO, and user experience.',
    },
];

const Experiences = () => {
    return (
        <div id="Experiences" className="bg-blue-50 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-poppins font-bold text-dark-blue text-center mb-12">
                    My Experiences
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiences.map((experience) => (
                        <div
                            key={experience.id}
                            className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
                        >
                            <h3 className="text-xl font-semibold text-dark-blue mb-2">
                                {experience.title}
                            </h3>
                            <p className="text-warm-orange font-medium mb-1">
                                {experience.company}
                            </p>
                            <p className="text-teal mb-4">{experience.duration}</p>
                            <p className="text-dark-blue">{experience.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experiences;