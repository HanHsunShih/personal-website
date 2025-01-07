import "./Header.scss";
import fishchiefLogo from "../../assets/images/fishchief-logo.png";
import hambergurMenu from "../../assets/images/hamburger-menu-128px.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className="header">
      <Link to="/">
        <img className="header__logo" src={fishchiefLogo} alt="logo" />
      </Link>
      <img className="header__hb-icon" src={hambergurMenu} />
    </section>
  );
}
