import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('GifExpertApp', () => {
  test('adds a new category', () => {
    render(<GifExpertApp />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.change(input, { target: { value: 'Naruto' } });
    fireEvent.submit(form);

    expect(screen.getByText('Naruto')).toBeTruthy();
    expect(screen.getByText('Dragon ball')).toBeTruthy();
  });

  test('does not add duplicate category', () => {
    render(<GifExpertApp />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.change(input, { target: { value: 'Dragon ball' } });
    fireEvent.submit(form);

    screen.debug();

    expect(screen.getAllByText('Dragon ball').length).toBe(1);
  });
});
