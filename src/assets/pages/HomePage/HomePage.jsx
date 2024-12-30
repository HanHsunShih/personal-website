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
        <p className="article__description">
          This QR code ordering app, designed for my sister's cafe in Taiwan,
          enables online orders with a client-side menu and an admin dashboard
          for managing orders and history.
        </p>
        <Link to="/full-stack-project" className="article__button-box">
          <p className="article__button">{`More >`}</p>
        </Link>
      </article>
    </>
  );
}
