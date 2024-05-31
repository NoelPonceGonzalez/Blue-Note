const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4 md:flex md:justify-between">
                <div className="mb-4 md:mb-0">
                    <h4 className="text-lg font-semibold mb-1">Mas Gospel</h4>
                    <p className="text-sm">La página oficial del coro Mas Gospel</p>
                </div>
                <div className="mb-4 md:mb-0">
                    <h4 className="text-lg font-semibold mb-1">Contacto</h4>
                    <p className="text-sm">Email: contacto@masgospel.com</p>
                    <p className="text-sm">Teléfono: +123 456 7890</p>
                </div>
                <div className="mb-4 md:mb-0">
                    <h4 className="text-lg font-semibold mb-1">Síguenos</h4>
                    <a href="https://facebook.com/masgospel" target="_blank" rel="noopener noreferrer" className="block text-sm mb-1 hover:underline">Facebook</a>
                    <a href="https://instagram.com/masgospel" target="_blank" rel="noopener noreferrer" className="block text-sm mb-1 hover:underline">Instagram</a>
                    <a href="https://twitter.com/masgospel" target="_blank" rel="noopener noreferrer" className="block text-sm hover:underline">Twitter</a>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-4 border-t border-gray-700 pt-2 text-center">
                <p className="text-sm mb-1">Autores del sitio web:</p>
                <p className="text-sm">Santiago Benítez Álvarez, Angel Herriaz Foz, Bruno Amat, Noel Ponce</p>
                <p className="text-sm mt-2">&copy; 2024 Mas Gospel. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;