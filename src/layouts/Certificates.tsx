
const certificates = [
  {
    id: 1,
    title: 'Frontend Developer Certificate',
    issuer: 'Udemy',
    date: '2024-01-15',
    link: 'https://www.udemy.com/certificate/example1'
  },
  {
    id: 2,
    title: 'React Advanced',
    issuer: 'Coursera',
    date: '2023-11-10',
    link: 'https://www.coursera.org/certificate/example2'
  }
];

const Certificates = () => (
  <div id="Certificates" className="py-16 ">
    <div className="container mx-auto px-4 bg-white shadow-lg rounded-lg p-8 md:p-10 mt-[60px] mb-[60px] ">
      <h2 className="text-4xl font-poppins font-bold text-dark-blue text-center mb-12">
        Certificates
      </h2>
      <ul className="space-y-6">
        {certificates.map(cert => (
          <li key={cert.id} className="bg-light-gray rounded-lg p-6 overflow-hidden transform transition-transform hover:scale-102 hover:shadow-2xl border border-gray">
            <h3 className="text-xl font-semibold text-dark-blue">{cert.title}</h3>
            <p className="text-gray-dark">Issued by: {cert.issuer}</p>
            <p className="text-gray-dark">Date: {cert.date}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-yellow hover:text-dark-blue font-medium transition-colors"
            >
              View Certificate
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Certificates;