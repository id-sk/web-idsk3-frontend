import React from 'react';
import Link from 'next/link';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const isExternalHref = (href = '') =>
  href.startsWith('http://') || href.startsWith('https://');

const renderIcon = (icon, className) => {
  if (!React.isValidElement(icon)) return icon;

  return React.cloneElement(icon, {
    className: cx(className, icon.props.className),
    'aria-hidden': true,
    focusable: false,
  });
};

export const SignpostGroup = ({ children, columns = 2, className = '' }) => {
  const gridClass =
    columns === 1
      ? 'grid-cols-1'
      : columns === 3
        ? 'grid-cols-1 md:grid-cols-3'
        : 'grid-cols-1 md:grid-cols-2';

  return (
    <div className={cx('grid gap-6', gridClass, className)}>
      {children}
    </div>
  );
};

export const Signpost = ({
  href,
  heading,
  headingLevel = 'h3',
  icon,
  arrowIcon,
  target,
  className = '',
  children,
  ...props
}) => {
  const HeadingTag = headingLevel;
  const isExternal = target === '_blank' || isExternalHref(href);

  const linkClassName = cx(
    'group block w-full rounded-[10px] border-2 border-[#BDBDBD] bg-white p-5 tracking-wide no-underline',
    'hover:ring-[4px] hover:ring-[#757575]',
    'focus:outline-none',
    'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#D96E00] focus-visible:outline-offset-2',
    className
  );

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          {icon && (
            <div className="mt-1 shrink-0 text-[#0B4199] group-focus-visible:text-[#0B0C0C]">
              {renderIcon(icon, 'h-6 w-6')}
            </div>
          )}

          <HeadingTag
            className={cx(
              'text-[19px] font-bold leading-7 text-[#0B4199] underline',
              'sm:text-[24px] sm:leading-9',
              'group-hover:decoration-[3px] group-hover:underline-offset-2',
              'group-focus-visible:text-[#0B0C0C]'
            )}
          >
            {heading}
          </HeadingTag>
        </div>

        {arrowIcon && (
          <div className="mt-1 shrink-0 text-[#0B4199] group-focus-visible:text-[#0B0C0C]">
            {renderIcon(arrowIcon, 'h-6 w-6')}
          </div>
        )}
      </div>

      {children && (
        <p className="mt-5 text-[19px] leading-7 text-[#212121] group-focus-visible:text-[#0B0C0C]">
          {children}
        </p>
      )}

      {isExternal && (
        <span className="sr-only"> Otvorí sa v novom okne.</span>
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target={target || '_blank'}
        rel="noopener noreferrer"
        className={linkClassName}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClassName} {...props}>
      {content}
    </Link>
  );
};