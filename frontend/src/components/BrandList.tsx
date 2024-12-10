// Definir la interfaz para los datos de las marcas
interface Brand {
    name: string;
    logo: string;
}

export function BrandList() {
  // Lista de marcas con sus logos
    const brands: Brand[] = [
        { name: 'Genius Industries', logo: '/assets/images/GENIUS-BLACK.png' },
        { name: 'ByteSaver', logo: '/assets/images/bytesaver.jpg' },
        { name: 'DnackStyle', logo: '/assets/images/dnackstyle.jpg' },
        { name: 'KhimichStore', logo: '/assets/images/khmich_store.jpg' },
    ];

        return (
            <div className="w-full bg-gray-100 py-8">
                {/* Título centrado */}
                <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">Clientes Satisfechos</h2>

            <div className="container mx-auto flex flex-wrap justify-center items-center space-x-20">
                {brands.map((brand, index) => (
                <div key={index} className="flex flex-col items-center justify-center mb-4">
                    <div className="bg-gray-300 rounded-full p-2 shadow-lg"> {/* Contenedor con fondo y sombra */}
                    <img
                        src={brand.logo}
                        alt={brand.name}
                        className="w-24 h-24 rounded-full object-cover" // Redondear el logo como avatar
                    />
                    </div>
                    <p className="mt-2 text-center text-gray-600">{brand.name}</p>
                </div>
                ))}
            </div>
            </div>
        );
    };

