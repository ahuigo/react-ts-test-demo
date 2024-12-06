import * as React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Hello } from './Hello';

it('renders correctly with given props', () => {
  const { getByLabelText } = render(<Hello name="World" />);
  expect(getByLabelText('World')).toBeInTheDocument();
});
