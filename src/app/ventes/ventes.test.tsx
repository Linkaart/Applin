import { expect, test, vi } from 'vitest';
import { GlobalContext } from '../hooks/context-hooks';
import { render } from '@testing-library/react';
import Ventes from './ventes';
import 'element-internals-polyfill';

const mockGlobalState: any = {};
const mockSetGlobalState = () => {};
// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders Ventes component', () => {
  const wrapper = render(
    <GlobalContext.Provider value={{ globalState: mockGlobalState, setGlobalState: mockSetGlobalState }}>
      <Ventes />
    </GlobalContext.Provider>);
  expect(wrapper).toBeTruthy();
});