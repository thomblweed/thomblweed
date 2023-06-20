import type { LinksFunction } from '@remix-run/node';

import footerStyles from './footer.css';

type FooterProps = {
  footerText: string;
};

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: footerStyles }
];

export const Footer = ({ footerText }: FooterProps) => (
  <footer className="footer">
    <div>
      <p className="text-normal text-primary">{footerText}</p>
      <p className="text-small text-secondary">
        Copyright &copy; {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);
