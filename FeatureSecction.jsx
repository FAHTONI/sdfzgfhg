import React from 'react';
import { FileText, Clock, CheckCircle, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const features = [
  {
    icon: FileText,
    title: 'Pendaftaran Online',
    description: 'Isi formulir dan upload dokumen langsung dari rumah',
    bgColor: 'bg-cyan-100',
    iconColor: 'text-teal-500'
  },
  {
    icon: Clock,
    title: 'Tracking Real-time',
    description: 'Pantau status permohonan PKL kamu secara langsung',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-500'
  },
  {
    icon: CheckCircle,
    title: 'Proses Cepat',
    description: 'Mendapat respons dalam waktu singkat',
    bgColor: 'bg-indigo-100',
    iconColor: 'text-indigo-500'
  },
  {
    icon: Users,
    title: 'Dashboard Admin',
    description: 'Kelola semua pendaftaran dengan mudah',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-500'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
