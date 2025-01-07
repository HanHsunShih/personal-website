import "./DataAnalysis.scss";
import calendarImg from "../../assets/images/calendar.png";

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
            className="data-page__calendar-img"
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
        <article className="data-page__article"></article>
        <article className="data-page__article"></article>
      </main>
    </div>
  );
}
