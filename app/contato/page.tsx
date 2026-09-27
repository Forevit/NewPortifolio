import { MapPin } from "lucide-react";
import { ContactLinks } from "@/components/contact/contact-links";
import { PageHeader } from "@/components/ui/section";
import { profile } from "@/content/profile";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contato",
  description: "Entre em contato com Eduardo Ferreira por e-mail, LinkedIn ou GitHub.",
  path: "/contato",
});

export default function ContactPage() {
  return (
    <div className="wrap pt-16 pb-24 md:pt-24 md:pb-32">
      <PageHeader
        eyebrow="Contato"
        title="Vamos conversar?"
        intro="Se você quer trocar uma ideia sobre suporte, infraestrutura, redes ou automação, pode falar comigo por aqui."
      />
      <ContactLinks />
      <p className="mt-8 inline-flex items-center gap-3 text-base text-muted">
        <MapPin size={18} aria-hidden="true" className="text-accent-text" />
        {profile.city}
      </p>
    </div>
  );
}
