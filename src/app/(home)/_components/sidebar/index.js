'use client'

import { Wrapper } from "./wrapper";
import SidebarLink from "./sidebar-link.js";


const Sidebar = ({ data }) => {
  return (
    <Wrapper>
      <aside className="h-full flex flex-col pb-8 sticky overflow-y-auto">
        <nav>
          <ul role="list" aria-live="polite" className="text-black pr-2 pt-2">
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
    </Wrapper>);
}

export default Sidebar;