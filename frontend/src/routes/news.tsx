import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Route = createFileRoute('/news')({
    component: () => NewsPage()
})

// Definir la interfaz para los datos de las noticias
interface News {
  title: string;
  description: string;
  date: string;
  image: string; // Ruta de la imagen
}

export function NewsPage(){
  // Lista de noticias con sus detalles
  const news: News[] = [
    {
      title: '"GET" Genius Industries Token ',
      description: 'Creacion y lanzamiento de la token "GET" de Genius Industries creada por Cod3Genius para la plataforma de trading Genius Industries integrado a sus negociaciones con servicios de inmuebles tokenizados y demas servicios.',
      date: '2024-12-14',
      image: '/assets/images/get-logo.jpg', // Cambia esto por la ruta de la imagen
    },
    {
      title: 'Khimich Store ',
      description: 'Cod3Genius ha firmado un acuerdo de desarrollo con Khimich Store para desarrollar soluciones innovadoras en su website para lograr impulsar su marca a traves de internet.',
      date: '2024-11-10',
      image: '/assets/images/hompage.png', // Cambia esto por la ruta de la imagen
    },
    // Agrega más noticias aquí si es necesario
  ];

  return (
    <>
      <Navbar />
      <div className="w-full bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          {/* Sección de Introducción */}
          <section className="mb-12">
            <h1 className="text-center text-4xl font-bold text-gray-800 mb-6">Novedades</h1>
            <p className="text-center text-gray-600">
              Mantente al día con las últimas noticias y actualizaciones de nuestro equipo y servicios.
            </p>
          </section>

          {/* Sección de Noticias */}
          <section>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.map((article, index) => (
                  <div
                    key={index}
                    className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{article.title}</h3>
                      <p className="text-gray-600 mb-4">{article.description}</p>
                      <p className="text-sm text-gray-500">{article.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};