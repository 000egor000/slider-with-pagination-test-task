import Link from "next/link";

const NavLinkCustom = ({ href, children }: NavLinkProps) => (
  <nav className="cursor-pointer">
    <Link href={href}>{children}</Link>
  </nav>
);

export default NavLinkCustom;
