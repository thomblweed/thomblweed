import {
    index,
    layout,
    route,
    type RouteConfig
} from '@remix-run/route-config';

const getBlogRoutes = () =>
    Object.keys(import.meta.glob('./routes/blog.*.mdx')).map((file) => {
        const filename = file.replace('./routes/blog.', '').replace(/\.mdx$/, '');
        return route(`blog/${filename}`, file);
    });

export default [
    index('routes/_index.tsx'),
    layout('routes/blog.tsx', [
        route('blog', 'routes/blog._index.tsx', { index: true }),
        ...getBlogRoutes()
    ]),
    route('login', 'routes/login.tsx')
] satisfies RouteConfig;
