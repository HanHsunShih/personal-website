import "./HomePage.scss";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero-image.png";
import linkedInLogo from "../../assets/images/LinkedIn-logo.png";

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
      <main>
        <article className="article">
          <h2 className="article__title">Full-Stack Project</h2>
          <p className="article__description">
            This QR code ordering app, designed for my sister's cafe in Taiwan,
            enables online orders with a client-side menu and an admin dashboard
            for managing orders and history.
          </p>
          <Link to="/" className="article__button-box">
            <p className="article__button">{`More >`}</p>
          </Link>
        </article>
        <article className="article">
          <h2 className="article__title">Data Analysis</h2>
          <p className="article__description">
            Evidence-based decision making driven by data analysis and test
            results, increasing the sales and boost revenue growth for online
            shops.
          </p>
          <Link to="/data-analysis" className="article__button-box">
            <p className="article__button">{`More >`}</p>
          </Link>
        </article>
        <article className="article">
          <h2 className="article__title">Physical Product Management</h2>
          <p className="article__description">
            Utilising product management mindset to grow my giftware company.
          </p>
          <Link to="/" className="article__button-box">
            <p className="article__button">{`More >`}</p>
          </Link>
        </article>
        <article className="article">
          <h2 className="article__title">Digital Product Management</h2>
          <p className="article__description">
            Work with a team of five, we developed an app for wheelchair users.
          </p>
          <Link to="/" className="article__button-box">
            <p className="article__button">{`More >`}</p>
          </Link>
        </article>
      </main>
    </>
  );
}
