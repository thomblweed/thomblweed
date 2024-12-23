import { Outlet } from '@remix-run/react';
import 'highlight.js/styles/base16/dark-violet.css';

import { Section } from '~/components/Section';
import '~/features/blog/blog.css';

export default function BlogOutlet() {
  return (
    <Section>
      <div className="blog-container">
        <Outlet />
      </div>
    </Section>
  );
}
