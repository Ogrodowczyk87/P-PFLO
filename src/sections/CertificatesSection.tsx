import AwsCloudPractitionerBadge from '../assets/AWS Certified Cloud Practitioner .png';
import { certificates } from '../content/certificates';
import { sectionIds } from '../content/sectionIds';

const credlyCertificateUrl =
  'https://www.credly.com/badges/826b0e76-3c9d-45b1-8b83-22b716bc020f/public_url';

const CertificatesSection = () => {
  return (
    <section id={sectionIds.certificates} className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-5xl font-extrabold text-center text-dark-blue mb-16 font-poppins">
          Certificates
        </h2>
        <ul className="grid gap-10 md:grid-cols-2 items-stretch">
          {certificates.map(cert => (
            <li
              key={cert.id}
              className="relative h-full min-h-[320px] bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col justify-between transition-shadow hover:shadow-lg overflow-hidden"
            >
              <div className={cert.image ? 'pr-24' : ''}>
                {cert.image && (
                  <img
                    src={cert.image}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute top-3 right-3 w-20 h-20 object-contain opacity-90"
                  />
                )}
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

        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
          <img
            src={AwsCloudPractitionerBadge}
            alt="AWS Certified Cloud Practitioner badge"
            className="h-auto w-[180px] shrink-0"
          />
          <div className="text-center">
            <h3 className="mb-6 text-2xl font-semibold text-dark-blue">
              AWS Certified Cloud Practitioner
            </h3>
            <a
              href={credlyCertificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-dark-blue px-8 py-3 text-center font-medium text-white transition-colors hover:bg-accent-yellow"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
