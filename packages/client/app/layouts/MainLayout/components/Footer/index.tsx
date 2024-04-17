import { ContactInfo } from './components/ContactInfo';
import './footer.css';

type FooterProps = {
  footerText: string;
};

export const Footer = ({ footerText }: FooterProps) => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-copyright">
          <p className="footer-copyright-text text-normal text-primary">
            {footerText}
          </p>
          <p className="footer-copyright-text text-small text-secondary">
            Copyright &copy; {new Date().getFullYear()}
          </p>
        </div>
        <div>
          <ContactInfo />
        </div>
      </div>
    </div>
  </footer>
);
