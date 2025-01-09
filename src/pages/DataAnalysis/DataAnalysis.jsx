import "./DataAnalysis.scss";
import calendarImg from "../../assets/images/calendar.png";
import postcards from "../../assets/images/2postcards.png";
import redEnvelop from "../../assets/images/red-envelop.jpg";

export default function DataAnalysis() {
  return (
    <div className="data-page">
      <section className="data-page__hero">
        <h1 className="data-page__hero-title">
          Increase the sales on marketplaces
        </h1>
        <br />
        <p className="data-page__hero-subtitle">
          conversion rate / visitor
          <br />
          number / sales revenue / order value
        </p>
      </section>
      <main className="data-page__main">
        <article className="data-page__article">
          <img
            className="data-page__img"
            src={calendarImg}
            alt="calendar image"
          />
          <h2 className="data-page__title">Context</h2>
          <p className="data-page__content">
            We launch <b>New Year products</b> annually. For 2024, I designed a
            4-month marketing campaign, but first-month sales fell short of last
            year’s.
          </p>
          <h2 className="data-page__title">My Role</h2>
          <p className="data-page__content">
            As the main marketing manager, I oversee both marketplaces and
            consignment stores, working closely with data and marketing team
            members.
          </p>
        </article>
        <article className="data-page__article">
          <h2 className="data-page__title">Achievements</h2>
          <section className="data-page__achievements-block--odd">
            <h2>+200%</h2>
            <h3>conversion rate</h3>
          </section>
          <section className="data-page__achievements-block--even">
            <h2>+62%</h2>
            <h3>visitor numbers</h3>
          </section>
          <section className="data-page__achievements-block--odd">
            <h2>+10%</h2>
            <h3>order value</h3>
          </section>
          <section className="data-page__achievements-block--even">
            <h2>+15%</h2>
            <h3>sales revenue</h3>
          </section>
        </article>
        <article className="data-page__article">
          <h2 className="data-page__title">
            Problem Statement 1:
            <br /> Increase Visitors
          </h2>
          <p className="data-page__content">
            Despite follower growth, our post reach and shop visitors haven’t
            kept pace. How can we create content that better engages followers
            and drives them to our online shop?
          </p>
        </article>
        <article className="data-page__article">
          <h2 className="data-page__title">Hypothesis</h2>
          <p className="data-page__content">
            By sharing more content about the story of the product and the
            product development process, likes on posts and visits to our online
            shop might increase.
          </p>
          <p>Promotional Photo vs. Design process image</p>
          <img className="data-page__img" src={postcards} alt="2 postcards" />
          <p className="data-page__Hypothesis-conclusion">
            The basis of this hypothesis is that our Instagram and Facebook
            insights show that content about the design process and product
            inspiration engages our followers the most.
          </p>
        </article>
        <article className="data-page__article">
          <h2 className="data-page__title">A/B test</h2>
          <p className="data-page__content">
            Goal: Increase post reach and guide visitors to the online shop from
            social media
          </p>
          <h2 className="data-page__title--light-blue">Control Group 50%</h2>
          <img className="data-page__img" src={redEnvelop} alt="Red Envelop" />
        </article>
        <article className="data-page__article"></article>
        <article className="data-page__article"></article>
        <article className="data-page__article"></article>
      </main>
    </div>
  );
}
