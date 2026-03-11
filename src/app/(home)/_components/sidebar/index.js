'use client'

import { Wrapper } from "./wrapper";
import SidebarLink from "./sidebar-link.js";

const Sidebar = ({ data }) => {
  return (
    <Wrapper>
      <aside className="h-full flex flex-col pb-8 sticky overflow-y-auto">
        <nav>
          {/* PRIDANÉ ml-0 a pl-0, aby sme vynulovali to globálne 8px odsadenie! */}
          <ul role="list" aria-live="polite" className="text-black pr-2 pt-2 ml-0 pl-0">
            {data.map((item) => (
              <li key={item.name}>
                <SidebarLink href={item.link}>
                  {item.name}
                </SidebarLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </Wrapper>
  );
}

export default Sidebar;