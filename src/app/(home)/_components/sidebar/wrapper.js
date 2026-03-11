'use client'

export const Wrapper = ({ children }) => {
    return (
        // Zmenil som px-4 na pr-4 (padding len sprava). Ľavý okraj je čistý.
        <aside className="aside-container w-72 bg-white py-8 border-r-2 border-solid border-neutral-200 flex flex-col">
            <div className="bg-white flex-8 py-4 rounded-lg min-h-[300px]">
                <div className="flex flex-col mt-3 text-base tracking-wide leading-6 text-black">
                    <aside className="flex flex-col pb-8">
                        {children}
                    </aside>
                </div>
                
            </div>
        </aside>
    )
}