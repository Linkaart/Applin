import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import Produits from './produits';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders Produits component', () => {
  const wrapper = render(<Produits />);
  expect(wrapper).toBeTruthy();
});