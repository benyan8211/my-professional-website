import type { MDXComponents } from 'mdx/types'
import Image from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // This allows you to style your MDX without Tailwind
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => (
        <h2 className="text-2xl font-bold tracking-tight">{children}</h2>
    ),
    img: (props) => (
      <Image
        width={500}
        height={500}
        {...(props as any)}
      />
    ),
    ...components,
  }
}