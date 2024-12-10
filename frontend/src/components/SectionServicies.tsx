

// Definir la interfaz para los datos de los servicios
interface Service {
  title: string;
  description: string;
  icon: string; // Ruta del ícono
}

export function ServicesSection() {
  // Lista de servicios con sus detalles
  const services: Service[] = [
    {
      title: 'SEO Optimization',
      description: 'Optimizamos tu sitio web para mejorar su visibilidad en los motores de búsqueda.',
      icon: '/path/to/seo-icon.png', // Cambia esto por la ruta de tu ícono
    },
    {
      title: 'Social Media Marketing',
      description: 'Gestionamos tus redes sociales para aumentar tu presencia en línea y atraer más clientes.',
      icon: '/path/to/social-media-icon.png', // Cambia esto por la ruta de tu ícono
    },
    {
      title: 'Content Creation',
      description: 'Creamos contenido de alta calidad para atraer y retener a tu audiencia.',
      icon: '/path/to/content-icon.png', // Cambia esto por la ruta de tu ícono
    },
    {
      title: 'PPC Advertising',
      description: 'Gestionamos campañas de publicidad pagada para maximizar tus conversiones.',
      icon: '/path/to/ppc-icon.png', // Cambia esto por la ruta de tu ícono
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-12">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Nuestros Servicios</h2>
      <div className="container mx-auto flex flex-wrap justify-center items-stretch space-x-6 space-y-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2 lg:w-1/4"
          >
            <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-center text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

