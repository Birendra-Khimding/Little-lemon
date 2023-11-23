import { render, screen } from '@testing-library/react';
import App from './App';
import Reservation from './component/reservation';
import {initializeTimes ,updateTimes } from './App';
import { MemoryRouter } from 'react-router-dom';

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

test('HTML5 validation attributes are applied to the date input', () => {
  render(
    <MemoryRouter>
      <Reservation availableTimes={["10:00 AM", "12:00 PM", "2:00 PM"]} />
    </MemoryRouter>
  );
  const dateInputLabel = screen.getByText(/choose date/i);
  const dateInput = screen.getByLabelText('Choose date');
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toHaveAttribute('required');
});