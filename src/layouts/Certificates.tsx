import { certificates } from '../data/certyficates';

const Certificates = () => (
  <section id="Certificates" className="py-20 bg-white">
    <div className="container mx-auto px-6 md:px-12 lg:px-20">
      <h2 className="text-5xl font-extrabold text-center text-dark-blue mb-16 font-poppins">
        Certificates
      </h2>
      <ul className="grid gap-10 md:grid-cols-2">
        {certificates.map(cert => (
          <li
            key={cert.id}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between transform transition-transform hover:scale-105 hover:shadow-2xl border border-blue-200"
          >
            <div>
              <h3 className="text-2xl font-semibold text-dark-blue mb-3">{cert.title}</h3>
              <p className="text-dark-blue mb-1">
                <span className="font-medium">Issued by:</span> {cert.issuer}
              </p>
              <p className="text-dark-blue flex items-center gap-2 mb-6">
                <span role="img" aria-label="calendar">📅</span>
                {(cert.date)}
              </p>
            </div>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-dark-blue text-white font-medium py-3 rounded-lg hover:bg-accent-yellow transition-all text-center inline-block mt-auto"
            >
              🔗 View Certificate
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Certificates;
