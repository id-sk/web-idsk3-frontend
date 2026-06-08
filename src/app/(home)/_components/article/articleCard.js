'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const formatDisplayDate = (date) => {
  if (!date) return null;

  if (typeof date === 'string') {
    return date;
  }

  try {
    return new Intl.DateTimeFormat('sk-SK', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    }).format(new Date(date));
  } catch {
    return String(date);
  }
};

const formatMachineDate = (date) => {
  if (!date) return undefined;

  try {
    return new Date(date).toISOString().split('T')[0];
  } catch {
    return undefined;
  }
};

const CardMeta = ({ date, tags = [] }) => {
  const displayDate = formatDisplayDate(date);
  const machineDate = formatMachineDate(date);
  const hasTags = tags.length > 0;

  if (!displayDate && !hasTags) return null;

  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-[10px] gap-y-1 text-[16px]/[24px] tracking-wide text-[#757575]">
      {displayDate && (
        <time dateTime={machineDate}>
          {displayDate}
        </time>
      )}

      {displayDate && hasTags && (
        <span aria-hidden="true">—</span>
      )}

      {hasTags && (
        <span className="flex flex-wrap items-center gap-x-[10px] gap-y-1">
          {tags.map((tag, index) => (
            <React.Fragment key={`${tag}-${index}`}>
              {index > 0 && <span aria-hidden="true">|</span>}
              <span>{tag}</span>
            </React.Fragment>
          ))}
        </span>
      )}
    </div>
  );
};

const ArticleCard = ({
  href,
  title,
  description,
  src,
  alt = '',
  orientation = 'vertical', // vertical | horizontal
  date,
  tags = [],
  imagePriority = false,
  imageSizes,
  className = '',
  imageClassName = '',
  titleClassName = '',
  descriptionClassName = '',
  contentClassName = '',
  children,
}) => {
  const isHorizontal = orientation === 'horizontal';
  const hasImage = Boolean(src);

  const resolvedImageSizes =
    imageSizes ||
    (isHorizontal
      ? '(max-width: 768px) 100vw, 360px'
      : '(max-width: 768px) 100vw, 33vw');

  const cardContent = (
    <article
        className={cx(
          'relative flex h-full w-full overflow-hidden rounded-[10px] border-2 border-[#BDBDBD] bg-white tracking-wide',
          'transition-all duration-200',
          'group-hover:ring-[4px] group-hover:ring-[#757575]',
          'group-focus:outline group-focus:outline-[3px] group-focus:outline-[#D96E00] group-focus:outline-offset-2',
          isHorizontal
            ? 'flex-col md:flex-row'
            : 'flex-col',

          className
        )}
      >
      {hasImage && (
        <div
          className={cx(
            'relative shrink-0 overflow-hidden bg-zinc-200',

            isHorizontal
              ? 'h-[192px] w-full md:h-auto md:min-h-[170px] md:w-[40%] md:max-w-[360px]'
              : 'h-[192px] w-full',

            imageClassName
          )}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={imagePriority}
            sizes={resolvedImageSizes}
            className="object-cover transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"
          />
        </div>
      )}

      <div
        className={cx(
          'flex min-w-0 grow flex-col justify-center p-5',
          contentClassName
        )}
      >
        <div className="flex flex-col gap-[10px]">
          <h3
            className={cx(
              'text-[24px]/[36px] font-bold tracking-[0.5px] text-[#0B4199] underline',
              'line-clamp-2',
              titleClassName
            )}
          >
            {title}
          </h3>

          {description && (
            <p
              className={cx(
                'text-[19px]/[28px] font-normal tracking-[0.5px] text-[#212121]',
                'line-clamp-3',
                descriptionClassName
              )}
            >
              {description}
            </p>
          )}
        </div>

        <CardMeta date={date} tags={tags} />

        {children}
      </div>
    </article>
  );

  if (!href) {
    return cardContent;
  }

  return (
    <Link
      href={href}
      className={cx(
        'group block h-full max-w-[1060px] rounded-[10px] outline-none',
      )}
    >
      {cardContent}
    </Link>
  );
};

export default ArticleCard;