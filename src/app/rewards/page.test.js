import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Rewards from '../page';

describe('Rewards', () => {
  it('renders without crashing', () => {
    render(<Rewards />);
  });

  it('displays the correct title', () => {
    render(<Rewards />);
    expect(screen.getByText('Rewards')).toBeInTheDocument();
  });
});
