import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Faq() {
  return (
    <div className="mx-auto container w-[80%] my-28">
      <div className="">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between border-b-[#012857] border-b-[1px] py-2 text-left font-anton text-3xl lg:text-4xl text-[#012857]  ">
                <span>
                  Quel tarif dois-je prévoir pour un site performant ?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-10 w-10 text-[#012857]`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" py-4 px-5 lg:px-10 text-lg bg-gray-50 text-[#012857]  ">
                Tout dépend du périmètre du projet. <br /> Durant notre première
                réunion téléphonique, nous chercherons à délimiter les besoins
                et points clés de votre projet : le nombre de pages, les
                fonctionnalités spécifiques, l'urgence ou encore la quantité
                d'animations nécessaires sont des facteurs déterminants qui font
                varier le tarif final. <br /> <br /> À titre d'exemple, si tout
                ce dont vous avez besoin est une landing-page pertinente pour
                augmenter vos conversions, alors cela vous coûtera entre{" "}
                <span className="font-bold">2500€ et 3500€.</span> En revanche
                pour un site complet avec une dizaine de pages à maquetter et
                intégrer, une partie pour l'administration et la mise en place
                d'animations pour rendre la navigation plus fluide, le coût
                pourra augmenter sensiblement en fonction de la complexité
                inhérente à sa réalisation. Mon but étant toujours de trouver un
                tarif honnête qui convient aux 2 parties.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-10">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between border-b-[#012857] border-b-[1px] py-2 text-left font-anton text-3xl lg:text-4xl text-[#012857]  ">
                <span>
                  En combien de temps mon site sera-t-il opérationnel ?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-10 w-10 text-[#012857]`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" py-4 px-5 lg:px-10 text-lg bg-gray-50 text-[#012857] ">
                Cela va dépendre de vos besoins :<br /> - Pour une landing-page,
                comptez entre une et 3 semaines de production.
                <br /> - Un site internet complet entre 5 et 10 pages prendra
                entre 6 et 8 semaines.
                <br />
                <br /> Bien évidemment, ces chiffres sont à titre informatif et
                prennent en compte la production, nos différents retours et le
                temps que vous passerez à rédiger et récupérer votre contenu. Si
                vous avez déjà tout avant le projet alors le temps de livraison
                en sera réduit drastiquement !
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-10">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between border-b-[#012857] border-b-[1px] py-2 text-left font-anton text-3xl lg:text-4xl text-[#012857]  ">
                <span>Proposez-vous d’autres services que le webdesign ?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-10 w-10 text-[#012857]`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" py-4 px-5 lg:px-10 text-lg bg-gray-50 text-[#012857] ">
                Bien sûr ! Voici l'étendue des services que je peux vous
                proposer afin d'intervenir à 360° sur votre projet : <br /> -
                Direction artistique <br />- Branding / Conception d'identité
                graphique <br />- Stratégie de communication
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-10">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between border-b-[#012857] border-b-[1px] py-2 text-left font-anton text-3xl lg:text-4xl text-[#012857]  ">
                <span>
                  Un site e-commerce, est-ce que c’est dans vos cordes ?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-10 w-10 text-[#012857]`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" py-4 px-5 lg:px-10 text-lg bg-gray-50 text-[#012857] ">
                Si vous avez besoin d'un simple site e-commerce ou d'une page
                boutique avec quelques articles à mettre en vente alors oui, je
                peux m'en charger et le développer directement. En revanche si
                vous désirez un gros site e-commerce avec des centaines de
                produits et des besoins spécifiques, alors je ne suis pas la
                bonne personne.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
