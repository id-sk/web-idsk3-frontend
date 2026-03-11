'use client'

const VzoryLayout = ({ children }) => {
  return (
    // Odstránili sme Navbar, Footer a SkipLink.
    // Obalili sme to rovnako ako ostatné stránky na max. 1120px do stredu.
    <main id="main-content" className="flex-grow w-full max-w-[1120px] mx-auto px-4 py-8">
      {children}
    </main>
  );
};

export default VzoryLayout;