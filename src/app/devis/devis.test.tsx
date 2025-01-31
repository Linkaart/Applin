import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Devis from './devis';
import 'element-internals-polyfill';

test('renders Devis component', () => {
  const wrapper = render(<Devis />);
  expect(wrapper).toBeTruthy();
});