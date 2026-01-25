import { certificates } from '../content/certificates';

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
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col justify-between transition-shadow hover:shadow-lg"
          >
            <div>
              <h3 className="text-2xl font-semibold text-dark-blue mb-3">{cert.title}</h3>
              <p className="text-slate-700 mb-1">
                <span className="font-medium">Issued by:</span> {cert.issuer}
              </p>
              <p className="text-slate-600 mb-6">
                <span className="font-medium">Date:</span> {cert.date}
              </p>
            </div>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-dark-blue text-white font-medium py-3 rounded-lg hover:bg-accent-yellow transition-colors text-center inline-block mt-auto"
            >
              View Certificate
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Certificates;
