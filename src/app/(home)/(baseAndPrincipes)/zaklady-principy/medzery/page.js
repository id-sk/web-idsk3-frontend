'use client'

import Row from "@/app/(home)/_components/gaps/row";

const spacingData = [
    { id: 1, name: 'Token meno', size: '15px', width: 'w-2' },
    { id: 2, name: 'Token meno', size: '20px', width: 'w-2.5' },
    { id: 3, name: 'Token meno', size: '30px', width: 'w-[15px]' },
    { id: 4, name: 'Token meno', size: '40px', width: 'w-5' },
    { id: 5, name: 'Token meno', size: '60px', width: 'w-[30px]' },
    { id: 6, name: 'Token meno', size: '100px', width: 'w-[50px]' },
];

const GapsPage = () => {
    return (
        <div className="flex flex-col my-8 max-w-[1000px] px-4 sm:px-0 text-black">
            <title>Medzery</title>
            
            <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight md:leading-[55px] mb-8">
                    Medzery
                </h1>
            </header>
            
            <main id="main-content" role="main">
                <p className="text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:leading-8 text-black mb-12">
                    Medzery sú dôležité pri určovaní vzťahov medzi jednotlivými prvkami a prispievajú k celkovej prehľadnosti a zrozumiteľnosti dizajnu. Medzera môže byť použitá na oddelenie jedného prvku od druhého, aby sa zvýšila jeho vizuálna dôležitosť a vytvorila sa jasná hierarchia prvkov. Pomáhajú zlepšiť čitateľnosť textu tým, že oddelia riadky alebo odseky a zvýraznia tak jednotlivé časti textu.
                </p>

                <div className="flex gap-4 pb-3 mb-4 text-sm sm:text-base md:text-lg font-bold tracking-wide border-b border-neutral-200">
                    <div className="w-1/6">Názov</div>
                    <div className="w-2/6 -mx-3">Token</div>
                    <div className="w-1/6 -mx-14">Veľkosť</div>
                </div>

                <div className="flex flex-col space-y-2">
                    {spacingData.map((item) => (
                        <Row key={item.id} {...item} />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default GapsPage;