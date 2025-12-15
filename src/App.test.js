import { render, screen } from '@testing-library/react';
import App from './App';

test('app loads successfully', () => {
  const {container} = render(<App />);
  expect(container.querySelector('.App')).toBeInTheDocument();
});
