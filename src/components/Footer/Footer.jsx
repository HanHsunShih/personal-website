import { Link } from "react-router-dom";
import linkedInLogo from "../../assets/images/LinkedIn-logo.png";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Copyright © 2025 Han Hsun Shih</p>
      <Link to="https://www.linkedin.com/in/amy-hanhsun-shih/">
        <img className="footer__linkedIn-icon" src={linkedInLogo} />
      </Link>
    </footer>
  );
}
