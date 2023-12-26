import { Section } from '~/components/Section';
import type { BlogData } from '~/service/supabase/types';

import './blogs.css';

import { Blogs } from './components/Blogs';
import { BlogAdminLayout } from './composables/admin/layouts/BlogAdmin';

type BlogsProps = {
  data: BlogData[] | null;
  isAdmin: boolean;
};

export const BlogsFeature = ({ data, isAdmin }: BlogsProps) => (
  <Section>
    <h2>Blog</h2>
    {isAdmin ? (
      <BlogAdminLayout>
        <Blogs data={data} />
      </BlogAdminLayout>
    ) : (
      <Blogs data={data} />
    )}
  </Section>
);
