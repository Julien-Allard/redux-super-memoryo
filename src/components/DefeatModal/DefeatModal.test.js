import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import DefeatModal from './DefeatModal';

describe('DefeatModal tests', () => {
  test('The defeat modal should not be visible at first', () => {
    render(<DefeatModal />);
    const modal = screen.getByTestId('defeat-modal');
    expect(modal).not.toHaveAttribute('class', 'defeatmodal-container active');
  });

  test('Clicking the retry button should throw the resetGame function', () => {
    const resetGame = jest.fn();
    render(<DefeatModal resetGame={resetGame} />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(resetGame).toHaveBeenCalledTimes(1);
  });
});
