import { cleanup, render, screen } from '@testing-library/react';
import fc from 'fast-check';
import { vi } from 'vitest';

import { BlogInfo } from '.';

describe('When "isAdmin" is FALSE', () => {
  vi.mock('@remix-run/react', async () => {
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
    fc.assert(
      fc
        .property(fc.nat(), fc.string(), (id, title) => {
          render(<BlogInfo id={id} title={title} />);
          const trimmmedTitle = title.trim();

          if (trimmmedTitle.length) {
            const heading = screen.getByRole('heading', { level: 3 });
            expect(heading).toBeInTheDocument();
            expect(heading).toHaveTextContent(trimmmedTitle);
          } else {
            expect(screen.queryByRole('heading')).not.toBeInTheDocument();
          }

          expect(screen.queryByRole('button')).not.toBeInTheDocument();
        })
        .afterEach(cleanup)
    );
  });
});
