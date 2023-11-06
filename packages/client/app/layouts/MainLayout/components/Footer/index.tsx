import './footer.css';

type FooterProps = {
  footerText: string;
};

export const Footer = ({ footerText }: FooterProps) => (
  <footer className="footer">
    <div className="container">
      <p className="text-normal text-primary">{footerText}</p>
      <p className="text-small text-secondary">
        Copyright &copy; {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);
