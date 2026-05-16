import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";
import createMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter'

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    // Add remark-frontmatter to parse/strip frontmatter
    remarkPlugins: ['remark-frontmatter']
  },
})

export default withFlowbiteReact(withMDX(nextConfig));