import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { States } from './states';

test(`[States Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<States />);
  expect(screen.innerHTML).toContain('States works!');
});
