import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Daftar Akun',
    description: 'Buat akun dengan email dan password. Proses verifikasi otomatis.'
  },
  {
    number: '2',
    title: 'Isi Formulir',
    description: 'Lengkapi data diri dan upload dokumen yang diperlukan (proposal, CV, surat pengantar).'
  },
  {
    number: '3',
    title: 'Submit & Tunggu',
    description: 'Submit aplikasi dan pantau status melalui dashboard.'
  },
  {
    number: '4',
    title: 'Terima Surat Balasan',
    description: 'Jika disetujui, download surat balasan dan mulai PKL kamu!'
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-16">
          Cara Kerja
        </h2>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-6 group">
              {/* Number Circle */}
              <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
