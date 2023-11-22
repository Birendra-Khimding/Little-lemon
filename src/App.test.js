import { render, screen } from '@testing-library/react';
import App from './App';
import Reservation from './component/reservation';
import {initializeTimes ,updateTimes } from './App';



describe('initializeTimes', () => {
  it('should return an array of available times', () => {
    const result = initializeTimes();
    const expectedTimes = ["10:00 Am", "12:00 Am", "2:00 Pm"];

    expect(result).toEqual(expectedTimes);
  });
});

describe('updateTimes', () => {
  it('should return the same value provided in the state', () => {
    const dispatch = jest.fn();
    const state = ["10:00 AM", "12:00 PM", "2:00 PM"];
    const selectedDate = '2023-11-22';
    updateTimes(dispatch, selectedDate);
    expect(dispatch).toHaveBeenCalledWith({
      type: "update_times",
      payload: { selectedDate }
    });
  });
});