import type { Metadata } from "next";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/lib/content";
export const metadata: Metadata = { title: "Contato", description: "Entre em contato com Eduardo Ferreira." };
export default function ContactPage() { return <div className="page wrap"><SectionHeading eyebrow="CONTATO" title="Vamos conversar?" intro="Se você quer trocar uma ideia sobre suporte, infraestrutura, redes ou automação, pode falar comigo por aqui." /><div className="contact-list"><a href={`mailto:${profile.email}`}><Mail /><span><small>E-mail</small><strong>{profile.email}</strong></span><ArrowUpRight /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /><span><small>LinkedIn</small><strong>Eduardo Ferreira</strong></span><ArrowUpRight /></a><a href={profile.github} target="_blank" rel="noreferrer"><Github /><span><small>GitHub</small><strong>github.com/Forevit</strong></span><ArrowUpRight /></a><div><MapPin /><span><small>Localização</small><strong>{profile.city}</strong></span></div></div></div>; }
