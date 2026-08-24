import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import dedent from 'dedent';

export const generateId = (text) => {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

export const SectionBlock = ({
  titleString,
  titleNode,
  index,
  children,
}) => {
  const baseId = titleString ? generateId(titleString) : 'section';
  const sectionId =
    index !== undefined ? `${baseId}-${index}` : baseId;

  return (
    <section
      aria-labelledby={sectionId}
      className="mt-4 flex scroll-mt-24 flex-col gap-3"
    >
      <h2
        id={sectionId}
        className="
          mb-1 text-xl font-bold leading-[26px] tracking-normal text-black
          sm:text-2xl sm:leading-[35px]
        "
      >
        {titleNode || titleString}
      </h2>

      <div className="flex flex-col gap-3">
        {children}
      </div>
    </section>
  );
};

export const H3 = ({ children }) => (
  <h3
    className="
      mb-2 mt-6 text-[19px] font-bold leading-6 tracking-normal text-black
      sm:text-xl sm:leading-[26px] sm:tracking-[0.15px]
    "
  >
    {children}
  </h3>
);

export const H4 = ({ children }) => (
  <h4
    className="
      mb-1 mt-4 text-base font-bold leading-6 tracking-[0.5px] text-black
      sm:text-[19px] sm:leading-6 sm:tracking-normal
    "
  >
    {children}
  </h4>
);

export const Text = ({ children, className = '' }) => (
  <p
    className={`
      text-sm leading-5 tracking-[0.5px] text-black
      sm:text-base sm:leading-6
      md:text-[19px] md:leading-7
      ${className}
    `}
  >
    {children}
  </p>
);

export const Ul = ({ children, className = '' }) => (
  <ul
    className={`
      list-disc space-y-2 pl-5 text-sm leading-5 tracking-[0.5px] text-black
      sm:pl-8 sm:text-base sm:leading-6
      md:text-[19px] md:leading-7
      ${className}
    `}
  >
    {children}
  </ul>
);

export const Ol = ({
  children,
  alpha = false,
  className = '',
}) => (
  <ol
    className={`
      ${alpha ? 'list-[lower-alpha]' : 'list-decimal'}
      space-y-2 pl-5 text-sm leading-5 tracking-[0.5px] text-black
      sm:pl-8 sm:text-base sm:leading-6
      md:text-[19px] md:leading-7
      ${className}
    `}
  >
    {children}
  </ol>
);

export const ExtLink = ({
  href,
  children,
  className = '',
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      text-[#0B4199] underline underline-offset-3
      hover:text-[#126DFF] hover:decoration-[length:3px]
      ${className}
    `}
  >
    {children}
    <span className="sr-only">
      {' '}
      (otvorí sa na novej karte)
    </span>
  </a>
);

export const CodeBlock = ({
  language = 'html',
  codeString,
  title,
  subtitle,
}) => (
  <figure className="my-8 w-full max-w-full">
    {(title || subtitle) && (
      <figcaption className="mb-4">
        {title && (
          <h4
            className="
              mb-1 text-base font-bold leading-6 text-black
              md:text-[19px] md:leading-6
            "
          >
            {title}
          </h4>
        )}

        {subtitle && (
          <span
            className="
              text-sm leading-5 tracking-[0.5px] text-gray-600
              md:text-base md:leading-6
            "
          >
            {subtitle}
          </span>
        )}
      </figcaption>
    )}

    <SyntaxHighlighter
      language={language}
      style={a11yDark}
      wrapLines
      wrapLongLines
      customStyle={{
        padding: '1.25rem',
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        margin: 0,
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        borderRadius: '0.375rem',
      }}
      codeTagProps={{
        style: {
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        },
      }}
    >
      {dedent(codeString)}
    </SyntaxHighlighter>
  </figure>
);

export const ExampleBlock = ({
  children,
  className = '',
  innerClassName = 'max-w-[700px]',
}) => (
  <div
    className={`
      mb-8 mt-4 flex flex-col items-center gap-6
      rounded-[10px] border-2 border-dashed border-[#757575] py-10
      ${className}
    `}
  >
    <div className={`w-full px-4 ${innerClassName}`}>
      {children}
    </div>
  </div>
);

export const StepItem = ({ title, children, className = '' }) => (
  <li className={className}>
    <H4>{title}</H4>
    {children}
  </li>
);