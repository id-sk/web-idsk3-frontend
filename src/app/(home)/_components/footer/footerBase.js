// components/footer/FooterBase.js

const FooterBase = ({
  children,
  links = [],
  bottomSection,
  logo,
  ariaLabel = "Päta webového sídla",
}) => {
  return (
    <footer
      aria-label={ariaLabel}
      className="w-full border-t border-solid border-neutral-200 bg-neutral-100"
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-wrap items-end justify-between gap-8 px-4 py-12 sm:px-8 min-[1160px]:px-4">
        <div
          className="
            min-w-0 flex-[1_1_560px] text-base leading-6 text-black
            [&_a]:text-[#212121]
            [&_a]:underline
            [&_a]:underline-offset-2
            [&_a:hover]:text-[#0B4199]
            [&_a:hover]:decoration-[3px]
          "
        >
          {children}

          {links.length > 0 && (
            <nav
              aria-label="Doplňujúce odkazy"
              className={children ? "mt-4" : undefined}
            >
              <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-2 p-0">
                {links.map((link, index) => (
                  <li key={link.id || `${link.href}-${index}`}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={
                        link.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {bottomSection && (
            <div className="mt-4">
              {bottomSection}
            </div>
          )}
        </div>

        {logo && (
          <div className="max-w-full shrink-0">
            {logo}
          </div>
        )}
      </div>
    </footer>
  );
};

export default FooterBase;