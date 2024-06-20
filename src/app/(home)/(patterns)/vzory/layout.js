'use client'

import Navbar from "../../_components/navbar/navbar.js";
import FooterResp from "../../_components/footer/FooterResp.js";


const VzoryLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mx-12 p-4 mb-4 -my-2">
        {children}
      </main>
      <FooterResp />
    </div>
  );
};

export default VzoryLayout;