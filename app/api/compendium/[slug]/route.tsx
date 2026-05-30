import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    console.log('slug in GET request', slug);
    const articlePath = path.join(process.cwd(), 'compendiumDocuments', `${slug}.mdx`);
    console.log('articlePath', articlePath);
    const articleContent = fs.readFileSync(articlePath, 'utf8');

    const themePath = path.join(process.cwd(), 'theme.json');
    const themeContent = fs.readFileSync(themePath, 'utf8');

    return NextResponse.json({ success: true, data: { articleContent, themeContent }});
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'File not found or unreadable' },
      { status: 404 }
    );
  }
}