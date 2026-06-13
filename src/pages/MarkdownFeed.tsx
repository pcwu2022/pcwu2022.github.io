import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Links from '../components/Links';
import homepageContent from '../content/homepage.json';
import projectsContent from '../content/myProjects.json';
import researchContent from '../content/research.json';
import leadershipContent from '../content/startupLeadership.json';

const MarkdownFeed = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isRaw = searchParams.get('raw') === 'true' || location.pathname.endsWith('/raw');
  const [copied, setCopied] = useState(false);

  // Helper to parse the wiki-style inner links [[/route#id|Label]] to standard markdown links
  const parseWikiLinks = (text: string) => {
    return text.replace(/\[\[([^\]]+)\]\]/g, (_, content) => {
      const [targetPart, aliasPart] = content.split('|');
      const target = (targetPart || '').trim();
      const alias = (aliasPart ?? targetPart ?? '').trim();
      const label = alias || target;

      if (target) {
        const absoluteUrl = target.startsWith('/')
          ? `https://pcwu2022.github.io/#${target}`
          : target;
        return `[${label}](${absoluteUrl})`;
      }
      return label;
    });
  };

  // Compile paragraphs
  const compileBody = (body?: string[]) => {
    if (!body || body.length === 0) return '';
    return body.map(p => parseWikiLinks(p)).join('\n\n');
  };

  // Construct the full Markdown document
  const generateMarkdown = () => {
    const { profile, about } = homepageContent;

    let md = '';
    md += `# Po-Chun Wu - Portfolio & Personal Website\n\n`;
    md += `> Auto-generated Markdown containing the complete, structured content of pcwu2022.github.io for AI models, LLMs, and web crawlers.\n\n`;
    md += `***\n\n`;

    // 1. Profile
    md += `## 1. Profile & Affiliations\n\n`;
    md += `**Name:** ${profile.name}\n\n`;
    md += `### Affiliations\n`;
    profile.affiliations.forEach(aff => {
      md += `- **${aff.name}**\n`;
      aff.programs.forEach(prog => {
        md += `  - ${prog.title}${prog.subtitle ? ` (${prog.subtitle})` : ''} | ${prog.dates}\n`;
      });
    });
    md += `\n`;
    
    md += `### Contact & Social Links\n`;
    profile.socialLinks.forEach(link => {
      md += `- **${link.alt}:** ${link.href}\n`;
    });
    md += `\n`;
    md += `***\n\n`;

    // 2. About Me
    md += `## 2. About Me\n\n`;
    about.sections.forEach(section => {
      const capitalizedSection = section.id.charAt(0).toUpperCase() + section.id.slice(1);
      md += `### ${capitalizedSection}\n`;
      md += `${compileBody(section.body)}\n\n`;
    });
    md += `***\n\n`;

    // 3. Projects
    md += `## 3. Projects\n\n`;
    projectsContent.items.forEach(item => {
      md += `### ${item.title}\n`;
      if (item.supporting && item.supporting.length > 0) {
        md += `*${item.supporting.join(' | ')}*\n\n`;
      }
      md += `${compileBody(item.body)}\n\n`;
      if (item.links && item.links.length > 0) {
        md += `**Project Links:**\n`;
        item.links.forEach(l => {
          md += `- [${l.label}](${l.href})\n`;
        });
        md += `\n`;
      }
    });
    md += `***\n\n`;

    // 4. Research
    md += `## 4. Research\n\n`;
    researchContent.items.forEach(item => {
      md += `### ${item.title}\n`;
      if (item.supporting && item.supporting.length > 0) {
        md += `*${item.supporting.join(' | ')}*\n\n`;
      }
      md += `${compileBody(item.body)}\n\n`;
      if (item.links && item.links.length > 0) {
        md += `**Research Links:**\n`;
        item.links.forEach(l => {
          md += `- [${l.label}](${l.href})\n`;
        });
        md += `\n`;
      }
    });
    md += `***\n\n`;

    // 5. Startup Leadership
    md += `## 5. Startup Leadership\n\n`;
    leadershipContent.items.forEach(item => {
      md += `### ${item.title}\n`;
      if (item.supporting && item.supporting.length > 0) {
        md += `*${item.supporting.join(' | ')}*\n\n`;
      }
      md += `${compileBody(item.body)}\n\n`;
      if (item.links && item.links.length > 0) {
        md += `**Leadership Links:**\n`;
        item.links.forEach(l => {
          md += `- [${l.label}](${l.href})\n`;
        });
        md += `\n`;
      }
    });

    return md;
  };

  const markdownText = generateMarkdown();

  // Handle Copy
  const handleCopy = () => {
    navigator.clipboard.writeText(markdownText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Handle Download
  const handleDownload = () => {
    const blob = new Blob([markdownText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'po_chun_wu_portfolio.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Render raw text if requested
  if (isRaw) {
    return (
      <pre style={{
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        padding: '2rem',
        backgroundColor: '#030712',
        color: '#d1d5db',
        fontFamily: 'monospace',
        margin: 0,
        minHeight: '100vh',
        fontSize: '0.9rem',
        lineHeight: '1.5'
      }}>
        {markdownText}
      </pre>
    );
  }

  return (
    <div className="m-0 p-0 min-h-screen">
      <Links />
      <div className="w-full max-w-5xl mx-auto px-4 py-8 md:py-16 pt-24">
        <div className="bg-slate-900/40 backdrop-blur-md border border-blue-900/30 rounded-2xl p-6 md:p-8 shadow-xl shadow-blue-950/10 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="font-display text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI & Crawler Feed
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                A single-page, dynamically compiled Markdown feed representing all content on this website. 
                Perfect for Large Language Models (LLMs), AI crawlers, and text-based archives.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleCopy}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors duration-150 shadow-md shadow-blue-900/20"
              >
                {copied ? '✓ Copied!' : 'Copy Markdown'}
              </button>
              <button
                onClick={handleDownload}
                className="px-4 py-2 text-xs font-semibold rounded-lg border border-blue-800 hover:bg-blue-900/20 text-blue-200 transition-colors duration-150"
              >
                Download .md
              </button>
              <Link
                to="/markdown?raw=true"
                className="px-4 py-2 text-xs font-semibold rounded-lg border border-gray-700 hover:bg-gray-800 text-gray-300 transition-colors duration-150"
              >
                View Raw
              </Link>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-slate-950/80">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
              <span className="text-xs text-gray-500 font-mono">po_chun_wu_portfolio.md</span>
              <span className="text-xs text-blue-400 font-mono">markdown</span>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-4 md:p-6 font-mono text-xs md:text-sm text-gray-300 leading-relaxed text-left whitespace-pre-wrap select-all">
              {markdownText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownFeed;
