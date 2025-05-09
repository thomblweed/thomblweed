import { cleanup, render, screen, within } from '@testing-library/react';
import fc from 'fast-check';
import { createRoutesStub } from 'react-router';
import { vi } from 'vitest';

import { BlogInfo } from './index';

describe('When "isAdmin" is FALSE', () => {
  vi.mock('react-router', async (importOriginal) => {
    const actual = await importOriginal<typeof import('react-router')>();
    return {
      ...actual,
      useOutletContext: () => ({ isAdmin: false })
    };
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render the title when text has length', () => {
    const stringsHaveLength = (s: string) => s !== ' ' && s.length > 0;
    fc.assert(
      fc
        .property(
          fc.nat(),
          fc.string().filter(stringsHaveLength),
          (id, title) => {
            const RemixStub = createRoutesStub([
              {
                path: '/',
                Component: () => <BlogInfo id={id} title={title} />
              }
            ]);
            render(<RemixStub />);

            const link = screen.getByRole('link');
            expect(link).toBeInTheDocument();
            const heading = within(link).getByRole('heading', { level: 3 });
            expect(heading).toBeInTheDocument();
            expect(heading).toHaveTextContent(title.trim());
            expect(screen.queryByRole('button')).not.toBeInTheDocument();
          }
        )
        .afterEach(cleanup)
    );
  });

  it('should NOT render the title when text has no length', () => {
    const stringHaveNoLength = (s: string) => s.length === 0;
    fc.assert(
      fc
        .property(
          fc.nat(),
          fc.string().filter(stringHaveNoLength),
          (id, title) => {
            const RemixStub = createRoutesStub([
              {
                path: '/',
                Component: () => <BlogInfo id={id} title={title} />
              }
            ]);
            render(<RemixStub />);

            expect(screen.queryByRole('heading')).not.toBeInTheDocument();
            expect(screen.queryByRole('button')).not.toBeInTheDocument();
          }
        )
        .afterEach(cleanup)
    );
  });
});
