'use client'

import Row from "@/app/(home)/_components/gaps/row";


const spacingData = [
    { id: 1, name: 'Token meno', size: '15px', width: 'w-2' },
    { id: 2, name: 'Token meno', size: '20px', width: 'w-2.5' },
    { id: 3, name: 'Token meno', size: '30px', width: 'w-[15px]' },
    { id: 4, name: 'Token meno', size: '40px', width: 'w-5' },
    { id: 5, name: 'Token meno', size: '60px', width: 'w-[30px]' },
    { id: 6, name: 'Token meno', size: '100px',width: 'w-[50px]' },
  ];
  

const GapsPage = () => {
    return (
      <div className="flex flex-col my-8 max-w-[835px] max-md:pr-5">
         <title>Medzery</title>
         <header>
        <h1 className="text-5xl font-black leading-[55.2px] max-md:max-w-full max-md:text-4xl">
          Medzery
        </h1>
        </header>
        <main id="main-content" role="main">
        <p className="mt-5 text-2xl tracking-normal leading-7 text-black max-md:max-w-full">
          Medzery sú dôležité pri určovaní vzťahou medzi jednotlivými prvky a prispieva k celkovej prehľadnosti a zrozumiteľnosti dizajnu. Medzera môže byť použitá na oddelenie jedného prvku od druhého, aby sa zvýšila jeho vizuálna dôležitosť a vytvorila sa jasná hierarchia prvkov. Pomáhajú zlepšiť čitateľnosť textu tým, že oddelia riadky alebo odseky a zvýraznia tak jednotlivé časti textu.
        </p>
        <div className="flex gap-4 py-2.5 pr-20 mt-10 text-custom-19 font-bold tracking-normal leading-7 whitespace-nowrap border-b border-neutral-200 max-md:flex-wrap max-md:pr-5">
          <div className=" w-1/6 sm:w-1/6">Názov</div>
          <div className="w-2/6 sm:w-2/6 -mx-3">Token</div>
          <div className="w-1/6 sm:w-1/6 -mx-14">Veľkosť</div>
        </div>
        {spacingData.map((item) => (
          <Row key={item.id} {...item} />
        ))}
        </main>
      </div>
    );
  }
  
  export default GapsPage;