import { AddSection } from './components/AddSection';

type BlogProps = {
  blog: { id: number; title: string };
};

export const Blog = ({ blog }: BlogProps) => {
  const { title } = blog;

  return (
    <>
      {title ? <h2>{title}</h2> : null}
      <AddSection />
    </>
  );
};
