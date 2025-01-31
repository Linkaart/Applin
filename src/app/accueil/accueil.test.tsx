import { expect, test, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Accueil from './accueil';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders Accueil component', () => {
  const wrapper = render(<Accueil />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});