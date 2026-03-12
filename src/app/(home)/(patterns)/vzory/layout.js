'use client'

const VzoryLayout = ({ children }) => {
  return (
    // 1. OPRAVA: Zmenené lg:px-4 na min-[1160px]:px-4
    <main id="main-content" className="flex-grow w-full max-w-[1120px] mx-auto px-4 sm:px-8 min-[1160px]:px-4 py-8">
      {children}
    </main>
  );
};

export default VzoryLayout;