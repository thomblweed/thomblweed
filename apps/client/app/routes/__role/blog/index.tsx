import { useOutletContext } from '@remix-run/react';

export default function Blog() {
  const role = useOutletContext<'user' | 'admin'>();
  return (
    <section>
      <span>{role}</span>
      <h2>Blog</h2>
    </section>
  );
}
