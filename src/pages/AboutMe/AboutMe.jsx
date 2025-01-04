import "./AboutMe.scss";
import amysPhoto from "../../assets/images/amy's-photo.jpg";

export default function AboutMe() {
  return (
    <main className="about">
      <img className="about__photo" src={amysPhoto} alt="Amy's photo" />
    </main>
  );
}
