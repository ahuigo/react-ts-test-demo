import * as React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { render, fireEvent } from '@testing-library/react';
import { Hello } from './Hello';

it('renders correctly with given props', async () => {
  const rtn = render(<Hello name="World" />);
  // console.log(rtn);
  expect(await rtn.findByText('World')).toBeVisible();
  expect(await screen.findByText('World')).toBeInTheDocument();
  expect(await screen.findByText('World')).toBeVisible();
});
