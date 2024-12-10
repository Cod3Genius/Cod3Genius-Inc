import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BrandList } from '../components/BrandList';
import { ServicesSection } from '../components/SectionServicies';

export const Route = createFileRoute('/home')({
  component: () => Home()
})


export function Home(){
    return (
        <>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Contenedor principal con Flexbox */}
        <div className="flex items-center justify-between w-full max-w-6xl p-6">
          {/* Texto a la izquierda */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold">Servicios profesionales</h1>
            <p className="mt-4 text-lg">
              Soluciones Tecnologicas profesionales, creacion de software a la medida de tus necesidades, desarrollo de aplicaciones web, moviles y de escritorio, microservicios, etc.
            </p>
            <button className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-blue-600">
              Consulta Ya!
            </button>
          </div>

          {/* Logo a la derecha */}
          <div className="flex-1 flex justify-end">
            <img
              src="/assets/images/CG.png" // Cambia esto por la ruta de tu logo
              alt="Cod3Genius Logo"
              className="w-100 h-auto" // Ajusta el tamaño del logo según tus necesidades
            />
          </div>
        </div>
      </div>
      <ServicesSection />
      <BrandList />
      <Footer />
      </>
    );
}