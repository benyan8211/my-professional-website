import type { MDXComponents } from 'mdx/types'
import Image from 'next/image';
import './app/globals.css';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // This allows you to style your MDX without Tailwind
    h1: ({ children, id }) => <h1 id={id} className="text-4xl font-bold mb-4">{children}</h1>,
    h2: ({ children, id }) => (
        <h2 id={id} className="text-2xl font-bold tracking-tight">{children}</h2>
    ),
    h3: ({ children, id }) => (
      <h3 id={id} className="text-xl font-bold tracking-tight">{children}</h3>
    ),
    img: (props) => (
      <Image
        width={500}
        height={500}
        {...(props as any)}
      />
    ),
    table: ({ children }) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full border-collapse text-sm">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border px-4 py-3 text-left font-bold bg-muted">{children}</th>
    ),
    td: ({ children }) => (
      <td className="border px-4 py-3 text-left">{children}</td>
    ),
    ul: (props: any) => <ul className="list-disc pl-5 toc-list" {...props} />,
    li: (props: any) => <li className="mb-1 toc-list" {...props} />,
    ...components,
  }
}