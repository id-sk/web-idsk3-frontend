'use client'

import { Wrapper } from "./wrapper";
import SidebarLink from "./sidebar-link.js";

const Sidebar = ({ data }) => {
  return (
    <Wrapper>
      <aside className="h-full flex flex-col pb-8 sticky">
        <nav>
          <ul role="list" aria-live="polite" className="text-black pt-2 ml-0 pl-0">
            {data.map((item) => (
              <li key={item.name} className="mb-1">
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
