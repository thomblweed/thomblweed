import { useParams } from '@remix-run/react';

export default function BlogItem() {
  const { blogId } = useParams();
  return <span>{blogId}</span>;
}
