import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
export function SiteShell({ children }: { children: React.ReactNode }) { return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><SiteHeader /><main id="conteudo">{children}</main><SiteFooter /></>; }
