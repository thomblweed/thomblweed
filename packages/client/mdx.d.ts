declare module '*.mdx' {
  const MDXComponent: (props: unknown) => React.JSX.Element;
  export default MDXComponent;
}
