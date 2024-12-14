import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Route = createFileRoute('/services')({
  component: () => Services()
})


// Definir la interfaz para los datos de los servicios
interface Service {
  title: string;
  description: string;
  icon: string; // Ruta del ícono
}

export function Services() {
  // Lista de servicios con sus detalles
  const services: Service[] = [
    {
      title: 'SEO Optimization',
      description: 'Optimizamos tu sitio web para mejorar su visibilidad en los motores de búsqueda.',
      icon: '/assets/images/CG.png', // Cambia esto por la ruta de tu ícono
    },
    {
      title: 'Social Media Marketing',
      description: 'Gestionamos tus redes sociales para aumentar tu presencia en línea y atraer más clientes.',
      icon: '/assets/images/CG.png', // Cambia esto por la ruta de tu ícono
    },
    {
      title: 'Content Creation',
      description: 'Creamos contenido de alta calidad para atraer y retener a tu audiencia.',
      icon: '/assets/images/CG.png', // Cambia esto por la ruta de tu ícono
    },
    {
      title: 'PPC Advertising',
      description: 'Gestionamos campañas de publicidad pagada para maximizar tus conversiones.',
      icon: '/assets/images/CG.png', // Cambia esto por la ruta de tu ícono
    },
    {
      title: 'Email Marketing',
      description: 'Diseñamos y ejecutamos campañas de email marketing efectivas para tu negocio.',
      icon: '/assets/images/CG.png', // Cambia esto por la ruta de tu ícono
    },
    {
      title: 'Web Development',
      description: 'Desarrollamos sitios web modernos y funcionales para impulsar tu presencia en línea.',
      icon: '/assets/images/CG.png', // Cambia esto por la ruta de tu ícono
    },
  ];

  return (
    <>
    <Navbar />
    <div className="w-full bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Sección de Introducción */}
        <section className="mb-12">
          <h1 className="text-center text-4xl font-bold text-gray-800 mb-6">Nuestros Servicios</h1>
          <p className="text-center text-gray-600">
            Ofrecemos una amplia gama de servicios de marketing digital diseñados para ayudar a tu negocio a crecer y prosperar en el mundo digital.
          </p>
        </section>

        {/* Sección de Servicios */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6"
              >
                <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-center text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
};

