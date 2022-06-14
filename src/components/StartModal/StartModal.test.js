import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StartModal from './StartModal';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

describe('StartModal tests', () => {
  // need to make a mockStore because there is a useDispatch in the StartModal component
  const initialState = { start: false };
  const mockStore = configureStore();
  let store;

  test('StartModal should appear on screen right at the start', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <StartModal startModal="active" />
      </Provider>,
    );
    const modal = screen.getByTestId('start-modal');
    expect(modal).toHaveAttribute('class', 'startmodal-container active');
  });

  test('Click on lets-a-go button should throw the setStartModal function passed as prop', () => {
    const setStartModal = jest.fn();
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <StartModal startModal="active" setStartModal={setStartModal} />
      </Provider>,
    );
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(setStartModal).toBeCalledTimes(1);
  });
});
