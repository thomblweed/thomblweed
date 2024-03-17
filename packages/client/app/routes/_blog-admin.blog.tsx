import { Outlet } from '@remix-run/react';
import 'highlight.js/styles/base16/dark-violet.css';

import { Section } from '~/components/Section';

export default function BlogOutlet() {
  return (
    <Section>
      <Outlet />
    </Section>
  );
}
