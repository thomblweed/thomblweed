import { render, screen } from '@testing-library/react';
import fc from 'fast-check';
import { vi } from 'vitest';

import { BlogData } from '~/service/supabase/types';

import { Blog } from '.';

vi.mock('./components/BlogInfo');

describe('When blogs data array has a minimum of 1 value', () => {
  const blogData = fc.array(
    fc.record({
      id: fc.nat(),
      title: fc.string(),
      created_by: fc.string(),
      created_on: fc.string()
    }),
    { minLength: 1 }
  );

  it('should NOT display comming soon message', () => {
    fc.assert(
      fc.property(blogData, (data) => {
        render(<Blog data={data} />);

        expect(screen.queryByText('coming soon...')).not.toBeInTheDocument();
      })
    );
  });
});

describe('When blogs data array is empty', () => {
  const blogData: BlogData[] = [];

  it('should display coming soon message', () => {
    render(<Blog data={blogData} />);

    expect(screen.getByText('coming soon...')).toBeInTheDocument();
  });
});

describe('When blogs data array is null', () => {
  const blogData: BlogData[] | null = null;

  it('should display coming soon message', () => {
    render(<Blog data={blogData} />);

    expect(screen.getByText('coming soon...')).toBeInTheDocument();
  });
});
