import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/about')({
    component: () => About()
})

// Definir la interfaz para los datos de los miembros del equipo
interface TeamMember {
  name: string;
  role: string;
  photo: string; // Ruta de la foto
}

// Definir la interfaz para los datos del fundador
interface Founder {
  name: string;
  title: string;
  bio: string;
  photo: string; // Ruta de la foto
}

export function About(){
  // Lista de miembros del equipo
  const teamMembers: TeamMember[] = [
    {
      name: 'Jussepe Fernandez M.',
      role: 'CEO',
      photo: '/assets/images/CG.png', // Cambia esto por la ruta de la foto
    },
    {
      name: 'Jeremias castro',
      role: 'Frontend Developer',
      photo: '/assets/images/CG.png', // Cambia esto por la ruta de la foto
    },
    {
      name: 'Jussepe Fernandez M.',
      role: 'Backend Developer',
      photo: '/assets/images/CG.png', // Cambia esto por la ruta de la foto
    },
    
  ];

  // Datos del fundador
  const founder: Founder = {
    name: 'Jussepe Fernandez M.',
    title: 'Fundador y CEO',
    bio: 'Jussepe Fernandez M. es el visionario detrás de Cod3Genius, una empresa de Soluciones de software que tiene como meta cambiar la forma en la que vemos el mundo digital. Con más de 15 años de experiencia en el sector, Jussepe Fernandez ha liderado el crecimiento de la empresa desde sus humildes comienzos hasta convertirse en un referente en el mercado.',
    photo: '/assets/images/CG.png', // Cambia esto por la ruta de la foto
  };

  return (
    <>
    <Navbar />
    <div className="w-full bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Sección de Introducción */}
        <section className="mb-12">
          <h1 className="text-center text-4xl font-bold text-gray-800 mb-6">Sobre Nosotros</h1>
          <p className="text-center text-gray-600">
            Somos una agencia de marketing digital comprometida con el éxito de nuestros clientes. Nuestro equipo de expertos trabaja incansablemente para ofrecer soluciones innovadoras y resultados excepcionales.
          </p>
        </section>

        {/* Sección del Fundador */}
        <section className="mb-12">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">Conoce al Fundador</h2>
          <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <img
              src={founder.photo}
              alt={founder.name}
              className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{founder.name}</h3>
              <p className="text-gray-600 mb-4">{founder.title}</p>
              <p className="text-gray-600">{founder.bio}</p>
            </div>
          </div>
        </section>

        {/* Sección de Misión y Visión */}
        <section className="mb-12">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">Nuestra Misión y Visión</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Misión</h3>
              <p className="text-gray-600">
                Nuestra misión es ayudar a las empresas a crecer y prosperar en el mundo digital, ofreciendo servicios de marketing de alta calidad y soluciones personalizadas.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Visión</h3>
              <p className="text-gray-600">
                Nuestra visión es ser líderes en el mercado de marketing digital, reconocidos por nuestra innovación, compromiso y resultados excepcionales.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de Equipo */}
        <section>
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6">
                <img src={member.photo} alt={member.name} className="w-32 h-32 rounded-full object-cover mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-center text-gray-600">{member.role}</p>
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
