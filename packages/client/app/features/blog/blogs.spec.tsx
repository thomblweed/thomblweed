import { render, screen } from '@testing-library/react';
// import fc from 'fast-check';
import { describe, it, expect } from 'vitest';

// import { BlogData } from '~/service/supabase/types';

import { BlogFeature } from './index';

// vi.mock('./components/BlogInfo');

// describe('When blogs data array has a minimum of 1 value', () => {
// const blogData = fc.array(
//   fc.record({
//     id: fc.nat(),
//     title: fc.string(),
//     created_by: fc.string(),
//     created_on: fc.string()
//   }),
//   { minLength: 1 }
// );

//   it('should NOT display comming soon message', () => {
//     fc.assert(
//       fc.property(blogData, (data) => {
//         render(<BlogFeature data={data} />);
//
//         expect(screen.queryByText('coming soon')).not.toBeInTheDocument();
//       })
//     );
//   });
// });

// describe('When blogs data array is empty', () => {
//   const blogData: BlogData[] = [];
//
//   it('should display coming soon message', () => {
//     render(<BlogFeature data={blogData} />);
//
//     expect(screen.getByText('coming soon')).toBeInTheDocument();
//   });
// });

// describe('When blogs data array is null', () => {
//   const blogData: BlogData[] | null = null;
//
//   it('should display coming soon message', () => {
//     render(<BlogFeature data={blogData} />);
//
//     expect(screen.getByText('coming soon')).toBeInTheDocument();
//   });
// });

describe('When blog feature is rendered', () => {
  it('should display coming soon message', () => {
    render(<BlogFeature />);

    expect(screen.getByText('coming soon')).toBeInTheDocument();
  });
});
