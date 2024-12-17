import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { IndexPage } from './IndexPage';

describe('IndexPage Component', () => {
    it('renders the correct text', () => {
        // Rendu du composant
        render(<IndexPage />);

        // Vérification que le texte "Index Page" est affiché
        expect(screen.getByText('Index Page')).toBeInTheDocument();
    });
});
