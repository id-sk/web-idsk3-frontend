import React, { useState } from 'react';
import { Feedback } from '@eslovensko/idsk-react';
import './_feedback-custom.scss';

export const CustomFeedback = ({ className, children, ...props }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleYesClick = (e) => {
    setIsSubmitted(true);
    if (props.yesButtonProps?.onClick) props.yesButtonProps.onClick(e);
  };

  const handleNoClick = (e) => {
    setIsSubmitted(true);
    if (props.noButtonProps?.onClick) props.noButtonProps.onClick(e);
  };

  return (
    <section
      className={`custom-feedback-wrapper ${className || ''}`}
      role="region"
      aria-label="Lišta spätnej väzby"
      aria-live="polite" 
    >
      <Feedback
        {...props}
        yesButtonProps={{
          ...props.yesButtonProps,
          onClick: handleYesClick,
          className: `${props.yesButtonProps?.className || ''} ${isSubmitted ? '!hidden' : ''}`
        }}
        noButtonProps={{
          ...props.noButtonProps,
          onClick: handleNoClick,
          className: `${props.noButtonProps?.className || ''} ${isSubmitted ? '!hidden' : ''}`
        }}
        reportButtonProps={isSubmitted ? undefined : props.reportButtonProps}
      >
        {isSubmitted ? (
          <div className="flex items-center justify-center gap-3 w-full custom-feedback-success">
            <svg 
              aria-hidden="true" 
              className="w-7 h-7 text-[#00703C] flex-shrink-0" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="font-medium text-black block py-2">
              Ďakujeme za vašu spätnú väzbu.
            </span>
          </div>
        ) : (
          <span className="font-medium text-black block custom-feedback-question">
            {children}
          </span>
        )}
      </Feedback>
    </section>
  );
};