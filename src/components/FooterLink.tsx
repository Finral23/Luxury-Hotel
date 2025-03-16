import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href?: string;
}

const FooterLink = ({ children, href }: Props) => {
  return (
    <a
      href={href}
      className="text-slate-200 hover:text-gray-300 cursor:pointer font-sf"
    >
      {children}
    </a>
  );
};

export default FooterLink;
