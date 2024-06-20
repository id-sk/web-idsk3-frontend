export const Wrapper = ({ children }) => {
    return (
        <aside className="w-72 bg-white px-4 py-8 border-r-2 border-solid border-neutral-200 flex flex-col">
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