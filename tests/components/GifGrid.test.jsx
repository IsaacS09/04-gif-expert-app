import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'One Punch';

  test('debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('debe de mostrar items cuando se cargan las img de useFetchGifs', () => {
    const gifs = [
      {
        id: 'abc',
        title: 'saitama',
        url: 'https://localhost.com/saitama.jpg',
      },
      {
        id: 'abcd',
        title: 'goku',
        url: 'https://localhost.com/goku.jpg',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img')).toHaveLength(2);
  });
});
