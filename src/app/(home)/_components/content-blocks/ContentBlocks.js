import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import dedent from 'dedent';

export const generateId = (text) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

export const SectionBlock = ({ titleString, titleNode, index, children }) => {
  const baseId = titleString ? generateId(titleString) : 'section';
  const sectionId = index !== undefined ? `${baseId}-${index}` : baseId;

  return (
    <section aria-labelledby={sectionId} className="flex flex-col gap-4 mt-10 scroll-mt-24">
      <h2 id={sectionId} className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-2">
        {titleNode || titleString}
      </h2>
      <div className="flex flex-col gap-4">
        {children}
      </div>
    </section>
  );
};

export const H3 = ({ children }) => (
  <h3 className="mt-8 mb-3 text-lg sm:text-xl font-bold tracking-wide text-black">
    {children}
  </h3>
);

export const H4 = ({ children }) => (
  <h4 className="mt-6 mb-2 text-base sm:text-lg font-bold tracking-wide text-black">
    {children}
  </h4>
);

export const Text = ({ children, className = "" }) => (
  <p className={`text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black ${className}`}>
    {children}
  </p>
);

export const Ul = ({ children, className = "" }) => (
  <ul className={`list-disc pl-5 sm:pl-8 space-y-2 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black ${className}`}>
    {children}
  </ul>
);

export const Ol = ({ children, alpha = false, className = "" }) => (
  <ol className={`${alpha ? 'list-[lower-alpha]' : 'list-decimal'} pl-5 sm:pl-8 space-y-2 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black ${className}`}>
    {children}
  </ol>
);

export const ExtLink = ({ href, children, className = "" }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`text-[#0B4199] underline underline-offset-3 hover:text-[#126DFF] hover:decoration-[length:3px] transition-all duration-100 ${className}`}
  >
    {children}
    <span className="sr-only"> (otvorí sa v novom okne)</span>
  </a>
);

export const CodeBlock = ({ language = "html", codeString, title, subtitle }) => (
  <figure className="my-8 max-w-full w-full">
    {(title || subtitle) && (
      <figcaption className="mb-4">
        {title && <h4 className="text-md md:text-lg font-bold text-black mb-1">{title}</h4>}
        {subtitle && <span className="text-sm md:text-base tracking-wide text-gray-600">{subtitle}</span>}
      </figcaption>
    )}
    
    <SyntaxHighlighter 
      language={language} 
      style={a11yDark} 
      wrapLines={true}
      wrapLongLines={true}
      customStyle={{ padding: '1.25rem', fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word', borderRadius: '0.375rem' }}
      codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
    >
      {dedent(codeString)}
    </SyntaxHighlighter>
  </figure>
);