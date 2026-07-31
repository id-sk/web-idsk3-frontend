import Image from "next/image";
import FooterBase from "@/app/(home)/_components/footer/footerBase";
import {
  SectionBlock,
  H3,
  Text,
} from "@/app/(home)/_components/content-blocks/ContentBlocks";

const exampleWrapperClass =
  "mb-8 mt-4 flex flex-col items-center gap-6 rounded-[10px] border-2 border-dashed border-[#757575] py-10";

const OperatorInformation = () => (
  <p>
    Prevádzkovateľom služby je Ministerstvo investícií, regionálneho rozvoja
    a informatizácie Slovenskej republiky.
  </p>
);

const MirriLogo = () => (
  <a
    href="https://mirri.gov.sk"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <Image
      src="/images/group.svg"
      alt="Ministerstvo investícií, regionálneho rozvoja a informatizácie Slovenskej republiky"
      width={290}
      height={66}
      className="h-auto max-w-full"
    />
  </a>
);

const TabVarianty = () => (
  <div className="animate-fade-in w-full min-w-0 text-black">
    <SectionBlock titleString="Varianty a stavy">
      <H3>1. Základný variant päty</H3>

      <Text className="mb-4">
        Základný variant obsahuje textové informácie, povinné odkazy a logo
        prevádzkovateľa alebo inštitúcie.
      </Text>

      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[700px] px-4">
          <FooterBase
            ariaLabel="Ukážka základného variantu päty"
            links={[
              {
                href: "#",
                label: "Vyhlásenie o prístupnosti",
              },
              {
                href: "#",
                label: "Kontakt na prevádzkovateľa",
              },
              {
                href: "#",
                label: "Mapa stránky",
              },
            ]}
            bottomSection={<OperatorInformation />}
            logo={<MirriLogo />}
          >
            <p>
              Na tomto webovom sídle sa využívajú len nevyhnutné/technické
              cookies.
            </p>
          </FooterBase>
        </div>
      </div>

      <H3>2. Variant s navigáciou</H3>

      <Text className="mb-4">
        Tento variant obsahuje sekundárnu navigáciu v päte. Použite ho vtedy,
        keď odkazové skupiny logicky dopĺňajú hlavnú navigáciu webového sídla.
      </Text>

      <div className={exampleWrapperClass}>
        <div className="w-full max-w-[700px] px-4">
          <FooterBase
            ariaLabel="Ukážka variantu päty s navigáciou"
            links={[
              {
                href: "https://idsk2.gov.sk/",
                label: "IDSK 2",
              },
              {
                href: "#",
                label: "Ochrana osobných údajov",
              },
            ]}
            bottomSection={<OperatorInformation />}
            logo={<MirriLogo />}
          >
            <nav
              aria-label="Navigácia v päte"
              className="border-b border-neutral-300 pb-7"
            >
              <div className="flex flex-wrap gap-x-20 gap-y-10">
                <div className="min-w-[180px] flex-1">
                  <h2 className="mb-4 text-lg font-bold">
                    Užitočné odkazy
                  </h2>

                  <ul className="m-0 list-none space-y-3 p-0">
                    <li>
                      <a href="#">Elektronické služby</a>
                    </li>
                    <li>
                      <a href="#">Životné situácie</a>
                    </li>
                    <li>
                      <a href="#">Časté otázky (FAQ)</a>
                    </li>
                  </ul>
                </div>

                <div className="min-w-[180px] flex-1">
                  <h2 className="mb-4 text-lg font-bold">
                    O nás
                  </h2>

                  <ul className="m-0 list-none space-y-3 p-0">
                    <li>
                      <a href="#">Projekty</a>
                    </li>
                    <li>
                      <a href="#">Kariéra</a>
                    </li>
                    <li>
                      <a href="#">Kontakty</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </FooterBase>
        </div>
      </div>
    </SectionBlock>
  </div>
);

export default TabVarianty;