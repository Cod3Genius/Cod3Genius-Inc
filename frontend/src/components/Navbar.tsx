import { Link } from '@tanstack/react-router';
import { Outlet } from '@tanstack/react-router';

export function Navbar(){
    return (
        <div>
        <nav className="flex justify-between items-center bg-white shadow-md p-4">
            <div className="flex items-center text-2xl font-bold">
                <img 
                    src="/assets/images/CG.png" 
                    alt="Cod3Genius Logo" 
                    className="h-10 w-auto mr-2"
                />
                Cod3Genius Inc
            </div>
            <div>
                <Link to="/" className="mr-4 text-gray-950 hover:text-purple-600">Inicio</Link>
                <Link to="/about" className="mr-4 text-gray-950 hover:text-purple-600">Conocenos</Link>
                <Link to="/services" className="mr-4 text-gray-950 hover:text-purple-600">Servicios</Link>
                <Link to="/news" className="mr-4 text-gray-950 hover:text-purple-600">Novedades</Link>
            </div>
        </nav>
        <Outlet />
    </div>
    );
};