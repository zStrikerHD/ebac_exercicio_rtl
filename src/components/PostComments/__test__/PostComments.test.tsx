import { fireEvent, render, screen } from '@testing-library/react';
import Post from '..';

describe('Teste para o componente Post', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<Post />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve funcionar o botao com 2 comentários', () => {
        render(<Post />);

        const textarea = screen.getByRole('textbox');
        const botao = screen.getByTestId('btn-comentar');

        fireEvent.change(textarea, { target: { value: 'Teste comentário' }});
        fireEvent.click(botao);

        fireEvent.change(textarea, { target: { value: 'Segundo comentário' }});
        fireEvent.click(botao);

        expect(screen.getByText('Teste comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});
