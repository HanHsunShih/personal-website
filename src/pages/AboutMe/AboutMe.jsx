import "./AboutMe.scss";
import amysPhoto from "../../assets/images/amy's-photo.jpg";
import Header from "../../components/Header/Header";

export default function AboutMe() {
  return (
    <>
      <Header />
      <main className="about">
        <img className="about__photo" src={amysPhoto} alt="Amy's photo" />
        <div className="about__text">
          <h1 className="about__text-title">Nice To Meet You</h1>
          <p className="about__text-content">
            I’m a full-stack software engineer who recently graduated from
            BrainStation's <b>Software Engineering Diploma program</b>. With 4
            years of experience managing a giftware company, I’m now focused on
            building creative web and mobile applications using APIs and
            front-end technologies.
            <br />
            <br />I am excited about the opportunity to join a collaborative and
            forward-thinking team where I can apply my technical skills and
            creativity to develop impactful solutions and create a positive
            impact.
          </p>
        </div>
      </main>
    </>
  );
}
