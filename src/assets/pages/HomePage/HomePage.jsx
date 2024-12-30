import "./HomePage.scss";
import heroImage from "../../images/hero-image.png";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="hero">
        <img className="hero__image" src={heroImage} alt="hero image" />
        <h1 className="hero__text">
          Hi! <br />
          I'm Amy, Han Hsun Shih
        </h1>
        <Link to="/about" className="hero__button-box">
          <p className="hero__button">More About Me</p>
        </Link>
      </div>
      <article className="article">
        <h2 className="article__title">Full-Stack Project</h2>
        <p>
          This QR code ordering app is built for my sister's cafe in Taiwan,
          allowing customers to order online. The client side handles menu
          display and ordering, while the admin dashboard, with login access,
          lets authorized users view orders and history.
        </p>
      </article>
    </>
  );
}
