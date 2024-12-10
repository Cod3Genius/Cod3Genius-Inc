export function Footer(){
    return (
        <>
        <footer className="bg-gray-100 text-gray-950 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src="/assets/images/CG.png" alt="Cod3Genius Logo" className="w-10 h-auto" />
                    <span className="text-lg font-bold">Cod3Genius Inc</span>
                    
                </div>

                {/* Sección central: Mensaje de derechos reservados */}
                <div className="text-center mb-4 md:mb-0">
                <p>&copy; 2024 Cod3Genius Inc. Todos los derechos reservados.</p>
                </div>
                
                {/*Seccion derecha logos redes sociales */}
                <div className="flex space-x-1">
                    <a href="https://www.facebook.com/cod3genius" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/Facebook-logo.png" alt="Facebook" className="w-8 h-7" />
                    </a>
                    <a href="https://www.instagram.com/cod3genius" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/instagram-bg.png" alt="Instagram" className="w-8 h-7" />
                    </a>
                    <a href="https://www.twitter.com/cod3genius" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/twitter-logo.webp" alt="Twitter" className="w-8 h-7" />
                    </a>
                    <a href="https://www.linkedin.com/cod3genius" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/linkedin-bg.png" alt="Linkedin" className="w-8 h-7" />
                    </a>
                </div>
                
            </div>
        </footer>
        </>
    )
}