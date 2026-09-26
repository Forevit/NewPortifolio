import Link from "next/link";
import { profile } from "@/lib/content";
export function SiteFooter() { return <footer className="site-footer"><div className="footer-inner"><span>© {new Date().getFullYear()} {profile.shortName}</span><span>Fortaleza, Ceará <i>·</i> Brasil</span><Link href="/contato">Vamos conversar <b>↗</b></Link></div></footer>; }
