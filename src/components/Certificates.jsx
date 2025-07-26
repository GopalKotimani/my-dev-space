import React from 'react'

const Certificates = () => {

  const certificates = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      url: 'https://www.freecodecamp.org/certification/gopal/js-algorithms',
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      url: 'https://www.freecodecamp.org/certification/gopal/responsive-web-design',
    },
    // Add more certificates here
  ];

  return (
    <section className="px-6 py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">📜 Certificates</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">Some of the certifications I've earned on my learning journey.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="border border-blue-500 p-6 rounded-xl shadow-sm hover:shadow-md transition-all bg-white dark:bg-gray-800"
            >
              <h3 className="text-xl font-semibold text-blue-600">{cert.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Issued by: {cert.issuer}</p>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Certificates