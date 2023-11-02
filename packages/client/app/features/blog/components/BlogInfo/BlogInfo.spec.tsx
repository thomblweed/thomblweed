import { cleanup, render, screen } from '@testing-library/react';
import fc from 'fast-check';
import { vi } from 'vitest';

import { BlogInfo } from '.';

describe('When "isAdmin" is FALSE', () => {
  vi.mock('@remix-run/react', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const actual = (await vi.importActual('@remix-run/react')) as any;
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
            render(<BlogInfo id={id} title={title} />);

            const heading = screen.getByRole('heading', { level: 3 });
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
            render(<BlogInfo id={id} title={title} />);

            expect(screen.queryByRole('heading')).not.toBeInTheDocument();
            expect(screen.queryByRole('button')).not.toBeInTheDocument();
          }
        )
        .afterEach(cleanup)
    );
  });
});
