import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { Interactions } from './interactions';

test(`[Interactions Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<Interactions />);
  expect(screen.innerHTML).toContain('Interactions works!');
});
