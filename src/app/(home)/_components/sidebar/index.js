'use client'

import { Wrapper } from "./wrapper";
import SidebarLink from "./sidebar-link.js";

const Sidebar = ({ data }) => {
  return (
    <Wrapper>
      {/* 1. Pridané px-4 (alebo aspoň px-2), aby mal focus ring miesto na dýchanie vnútri scrollu */}
      <aside className="h-full flex flex-col pb-8 sticky overflow-y-auto px-2">
        <nav>
          {/* 2. Odstránené pr-2 (už máme padding na aside) a pridaný p-1 pre istotu */}
          <ul role="list" aria-live="polite" className="text-black pt-2 ml-0 pl-0 p-1">
            {data.map((item) => (
              <li key={item.name} className="mb-1"> {/* Pridaný malý odstup medzi riadkami */}
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