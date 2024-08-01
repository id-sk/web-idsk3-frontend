'use client'

import { Wrapper } from "./wrapper";
import SidebarLink from "./sidebar-link.js";


const Sidebar = ({ data }) => {
  return (
    <Wrapper>
      <aside className="flex flex-col pb-8">
        <nav>
          <ul role="list" aria-live="polite" className="text-black">
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