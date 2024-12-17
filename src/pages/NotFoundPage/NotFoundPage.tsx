import {Link} from 'react-router';
import {useChangeDocumentTitle} from "@/hooks/useChangeDocumentTitle.tsx";

export function NotFoundPage() {
    useChangeDocumentTitle('Not Found');
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-800">404</h1>
                <p className="text-2xl font-light text-gray-600 mt-4">Oups! Page non trouvée</p>
                <p className="text-gray-500 mt-4 mb-8">
                    La page que vous recherchez a peut-être été supprimée ou est temporairement indisponible.
                </p>
                <Link
                    to="/"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                >
                    Retour à l'accueil
                </Link>
            </div>
        </div>
    );
}