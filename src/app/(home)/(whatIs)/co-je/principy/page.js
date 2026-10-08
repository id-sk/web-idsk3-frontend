import PageLayout from '@/app/(home)/_components/page_layout';
import { Text, SectionBlock } from '@/app/(home)/_components/content-blocks/ContentBlocks';
import principlesData from './principlesData';

export const metadata = {
  title: 'Princípy návrhu a rozvoja služieb | IDSK',
  description: 'Základné princípy pre vytváranie užitočných, prístupných a stabilných elektronických služieb štátu.',
};

const navData = principlesData.map((item) => ({
  name: item.title,
  link: `#${item.id}`,
}));

export default function PrincipyPage() {
  return (
    <PageLayout
      title="Princípy návrhu a rozvoja služieb"
      intro={
        <Text>
          Princípy stanovujú základný štandard pre tvorbu moderných, prístupných a jednoducho
          použiteľných digitálnych služieb štátu. Slúžia ako návod pre produktových manažérov,
          dizajnérov a vývojárov pri návrhu, dodávaní a rozvoji služieb verejnej správy. Ich
          uplatňovaním sa zabezpečuje jednotný digitálny štát, ktorý stavia potreby občanov
          a podnikateľov na prvé miesto.
        </Text>
      }
      navData={navData}
      navLabel="Obsah stránky"
    >
      <div className="flex flex-col max-w-[740px] text-black">
        {principlesData.map((item) => (
          <SectionBlock key={item.id} id={item.id} titleString={item.title}>
            <Text>{item.content}</Text>
          </SectionBlock>
        ))}
      </div>
    </PageLayout>
  );
}