'use client';

import React, { useId, useState } from 'react';
import ButtonCustom from '@/app/(home)/_components/button/buttonCustom';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const CheckIcon = ({ className = '' }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 13l4 4L19 7"
    />
  </svg>
);


const FeedbackBarCustom = ({
  id,
  question = 'Boli tieto informácie pre vás užitočné?',
  regionLabel = 'Lišta spätnej väzby',

  yesText = 'Áno',
  noText = 'Nie',
  yesContextText = 'tieto informácie boli pre mňa užitočné',
  noContextText = 'tieto informácie neboli pre mňa užitočné',

  showReportButton = false,
  reportText = 'Nahlásiť chybu',
  reportContextText = 's touto stránkou',

  thankYouText = 'Ďakujeme za vašu spätnú väzbu.',

  onYes,
  onNo,
  onReport,

  className = '',
}) => {
  const reactId = useId().replace(/:/g, '');
  const feedbackId = id || `feedback-bar-${reactId}`;

  const questionId = `${feedbackId}-question`;
  const statusId = `${feedbackId}-status`;

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleYesClick = (event) => {
    setIsSubmitted(true);
    onYes?.(event);
  };

  const handleNoClick = (event) => {
    setIsSubmitted(true);
    onNo?.(event);
  };

  return (
    <section
      className={cx(
        'w-full border-y border-[#BDBDBD] bg-[#F5F5F5]',
        className
      )}
      role="region"
      aria-label={regionLabel}
    >
      <div className="mx-auto w-full max-w-[1120px] px-[30px] py-5">
        <div
          id={statusId}
          aria-live="polite"
          aria-atomic="true"
          className={cx(
            !isSubmitted && 'sr-only',
            isSubmitted &&
              'flex w-full items-center justify-center gap-3 py-2 text-center text-[16px]/[24px] font-medium text-black'
          )}
        >
          {isSubmitted ? (
            <>
              <CheckIcon className="h-7 w-7 shrink-0 text-[#078814]" />
              <span>{thankYouText}</span>
            </>
          ) : null}
        </div>

        {!isSubmitted && (
          <div
            className="
              grid w-full items-center gap-4
              grid-cols-1
              min-[769px]:grid-cols-[minmax(0,1fr)_auto_minmax(140px,190px)]
              min-[769px]:gap-x-[25px]
            "
          >
            <fieldset className="contents">
              <legend
                id={questionId}
                className="
                  text-center text-[16px]/[24px] font-medium text-black
                  min-[769px]:text-left
                "
              >
                {question}
              </legend>

              <div
                className="
                  grid w-full max-w-[400px] grid-cols-2 gap-[25px] justify-self-center
                  min-[769px]:flex min-[769px]:w-auto min-[769px]:max-w-none min-[769px]:items-center min-[769px]:justify-self-auto min-[769px]:gap-[25px]
                "
              >
                <ButtonCustom
                  type="button"
                  variant="secondary"
                  status="basic"
                  size="large"
                  onClick={handleYesClick}
                  aria-describedby={questionId}
                  className="
                    w-full min-w-[112px] px-6
                    min-[769px]:w-auto min-[769px]:min-w-[96px] min-[769px]:px-7
                  "
                >
                  {yesText}
                  <span className="sr-only">, {yesContextText}</span>
                </ButtonCustom>

                <ButtonCustom
                  type="button"
                  variant="secondary"
                  status="basic"
                  size="large"
                  onClick={handleNoClick}
                  aria-describedby={questionId}
                  className="
                    w-full min-w-[112px] px-6
                    min-[769px]:w-auto min-[769px]:min-w-[96px] min-[769px]:px-7
                  "
                >
                  {noText}
                  <span className="sr-only">, {noContextText}</span>
                </ButtonCustom>
              </div>
            </fieldset>

            {showReportButton ? (
              <div
                className="
                  flex min-h-[44px] w-full justify-center
                  min-[769px]:justify-end
                "
              >
                <ButtonCustom
                  type="button"
                  variant="tertiary"
                  status="basic"
                  size="large"
                  onClick={onReport}
                  className="px-2"
                >
                  {reportText}
                  <span className="sr-only"> {reportContextText}</span>
                </ButtonCustom>
              </div>
            ) : (
              <div
                className="
                  hidden
                  min-[769px]:block
                "
                aria-hidden="true"
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeedbackBarCustom;