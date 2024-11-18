import Link from 'next/link';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/shadcn/ui/accordion';

const SomosIsadoraLinks = () => (
  <ul className="text-xs">
    {[
      { href: '/', text: 'Sobre Isadora' },
      { href: '/', text: 'Trabajá con nosotros' },
      { href: '/', text: 'Localizador de tiendas' },
      { href: '/', text: 'Términos y Condiciones' },
      { href: '/', text: 'Bases y Condiciones ISACLUB' },
      { href: '/', text: 'Preguntas Frecuentes ISACLUB' },
      { href: '/', text: 'Política de Privacidad' },
      { href: '/', text: 'Expansión' },
      { href: '/', text: 'Proveedores' },
    ].map((link, index) => (
      <li key={index} className="mb-3 leading-6">
        <Link href={link.href}>{link.text}</Link>
      </li>
    ))}
  </ul>
);

const SomosIsadora = () => (
  <div className="column min-w-auto">
    {/** Accordion para mobile */}
    <Accordion type="single" collapsible className="md:hidden">
      <AccordionItem value="item-1" className="border-black">
        <AccordionTrigger className="font-semibold text-[#686868] hover:no-underline">
          Somos Isadora
        </AccordionTrigger>
        <AccordionContent>
          <SomosIsadoraLinks />
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    {/** Conteúdo normal para desktop */}
    <div className="hidden md:block">
      <h3 className="mb-4 font-semibold">Somos Isadora</h3>
      <SomosIsadoraLinks />
    </div>
  </div>
);

export default SomosIsadora;
