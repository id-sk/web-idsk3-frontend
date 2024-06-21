import './sidebar-link.scss';

export const Wrapper = ({ children }) => {
    return (
        // Have to crete custom aside-container class to hide the component on mobile (doesn't work with tailwind classes)
        <aside className="aside-container w-72 bg-white px-4 py-8 border-r-2 border-solid border-neutral-200">
            <div className="bg-white flex-8 p-4 rounded-lg min-h-[300px]">
                <div className="flex flex-col px-5 mt-3 text-base tracking-wide leading-6 text-black">
                    <aside className="flex flex-col pb-8">
                        {children}
                    </aside>
                </div>
            </div>
        </aside>
    )
}
