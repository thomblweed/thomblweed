import {
  index,
  layout,
  route,
  type RouteConfig
} from '@react-router/dev/routes';

const getBlogRoutes = () =>
  Object.keys(import.meta.glob('./routes/blog/*.mdx')).map((file) => {
    const filename = file.replace('./routes/blog/', '').replace(/\.mdx$/, '');
    return route(`blog/${filename}`, file);
  });

export default [
  index('routes/index.tsx'),
  layout('routes/blog/layout.tsx', [
    route('blog', 'routes/blog/page.tsx', { index: true }),
    ...getBlogRoutes()
  ]),
  route('login', 'routes/login.tsx')
] satisfies RouteConfig;
