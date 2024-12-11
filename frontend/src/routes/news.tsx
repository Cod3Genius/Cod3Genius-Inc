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
      title: 'Nueva Actualización de SEO',
      description: 'Hemos lanzado una nueva actualización de nuestros servicios de SEO para mejorar aún más la visibilidad de tu sitio web.',
      date: '2023-10-01',
      image: '/path/to/seo-update.jpg', // Cambia esto por la ruta de la imagen
    },
    {
      title: 'Campaña de Marketing en Redes Sociales',
      description: 'Estamos lanzando una nueva campaña de marketing en redes sociales para aumentar la presencia de nuestros clientes.',
      date: '2023-09-15',
      image: '/path/to/social-media-campaign.jpg', // Cambia esto por la ruta de la imagen
    },
    {
      title: 'Nuevo Equipo de Desarrollo Web',
      description: 'Nos complace anunciar el lanzamiento de nuestro nuevo equipo de desarrollo web, listo para crear sitios web modernos y funcionales.',
      date: '2023-08-20',
      image: '/path/to/web-dev-team.jpg', // Cambia esto por la ruta de la imagen
    },
    {
      title: 'Webinar Gratuito: Marketing Digital',
      description: 'Únete a nuestro próximo webinar gratuito sobre las últimas tendencias en marketing digital.',
      date: '2023-07-10',
      image: '/path/to/webinar.jpg', // Cambia esto por la ruta de la imagen
    },
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
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
};

