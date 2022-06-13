import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';
import userEvent from '@testing-library/user-event';

describe('Card component tests', () => {
  test('The card does render correctly', () => {
    render(<Card card={{ src: '/img/Boo-icon.png' }} />);
    const cardElement = screen.getByRole('button');
    expect(cardElement).toBeInTheDocument();
  });

  test('Card should not be flipped without a click', () => {
    render(<Card card={{ src: '/img/Boo-icon.png' }} />);
    const cardElement = screen.getByRole('button');
    expect(cardElement).not.toHaveClass('flipped');
  });

  test('Card should not be matched', () => {
    render(<Card card={{ src: '/img/Boo-icon.png' }} />);
    const cardImage = screen.getByTestId('card-image');
    expect(cardImage).not.toHaveClass('front matched');
  });

  test('The card throw a function when clicked', () => {
    const handleClick = jest.fn();
    render(
      <Card
        card={{ src: '/img/Boo-icon.png' }}
        handleSelection={handleClick}
      />,
    );
    const cardElement = screen.getByRole('button');
    userEvent.click(cardElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('The card should get the flipped class when flipped prop is true', () => {
    render(<Card card={{ src: '/img/Boo-icon.png' }} flipped={true} />);
    const cardElement = screen.getByRole('button');
    expect(cardElement).toHaveAttribute('class', 'flipped');
  });

  test('The image should be shown if matched prop is equal to matched', () => {
    render(<Card card={{ src: '/img/Boo-icon.png' }} matched="matched" />);
    const cardImage = screen.getByTestId('card-image');
    expect(cardImage).toHaveClass('front matched');
  });

  test('The image should not be able to be flipped if disabled', () => {
    const handleClick = jest.fn();
    handleClick.mockImplementation(() => {
      if (!disabled) {
        jest.fn();
      }
    });
    render(
      <Card
        card={{ src: '/img/Boo-icon.png' }}
        handleSelection={handleClick}
        disabled={true}
      />,
    );
    const cardElement = screen.getByRole('button');
    userEvent.click(cardElement);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
