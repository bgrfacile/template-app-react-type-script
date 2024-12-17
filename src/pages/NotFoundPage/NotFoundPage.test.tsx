import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router'; // Nécessaire pour Link
import { describe, expect, it, vi } from 'vitest';
import { NotFoundPage } from './NotFoundPage';

// Mock du hook useChangeDocumentTitle
import { useChangeDocumentTitle } from '../../hooks/useChangeDocumentTitle.tsx';
vi.mock('../../hooks/useChangeDocumentTitle.tsx');

describe('NotFoundPage Component', () => {
    it('renders the 404 message and the main content', () => {
        render(
            <BrowserRouter>
                <NotFoundPage />
            </BrowserRouter>
        );

        // Vérification du titre principal
        expect(screen.getByText('404')).toBeInTheDocument();

        // Vérification du sous-titre
        expect(screen.getByText('Oups! Page non trouvée')).toBeInTheDocument();

        // Vérification du message d'information
        expect(
            screen.getByText(/La page que vous recherchez a peut-être été supprimée/i)
        ).toBeInTheDocument();

        // Vérification du lien
        const linkElement = screen.getByRole('link', { name: /Retour à l'accueil/i });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '/');
    });

    it('calls the useChangeDocumentTitle hook with "Not Found"', () => {
        render(
            <BrowserRouter>
                <NotFoundPage />
            </BrowserRouter>
        );

        // Vérifie que le hook mocké a été appelé avec le bon paramètre
        expect(useChangeDocumentTitle).toHaveBeenCalledTimes(1);
        expect(useChangeDocumentTitle).toHaveBeenCalledWith('Not Found');
    });
});
