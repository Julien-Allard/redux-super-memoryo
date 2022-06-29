import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TimerBar from './TimerBar';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('TimerBar component tests', () => {
  // need to make a mockStore because there is a useDispatch in the TimerBar component
  const mockStore = configureStore();
  let store;

  test('The timer bar should be seen right at the start', () => {
    const initialState = { timer: 0, max: 120, start: false };
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        {/* I need to call the setDefeatModal props to prevent a "setDefeatModal is not a function" error */}
        <TimerBar setDefeatModal={jest.fn()} />
      </Provider>,
    );
    const timer = screen.getByTestId('timer-bar');
    expect(timer).toBeTruthy();
  });

  // test('The timer should start when the game starts', () => {
  //   const initialState = { timer: 0, max: 120, start: true };
  //   store = mockStore(initialState);
  //   // I use useFakeTimers + advanceTimersByTime to simulate the setInterval of the TimerBar component
  //   jest.useFakeTimers();
  //   render(
  //     <Provider store={store}>
  //       <TimerBar setDefeatModal={jest.fn()} />
  //     </Provider>,
  //   );
  //   expect(initialState).toMatchObject({ timer: 0, max: 120, start: true });
  //   jest.advanceTimersByTime(3000);
  //   expect(initialState).toMatchObject({ timer: 3, max: 120, start: true });
  // });
});
