import Header from "../../components/Header/Header";
import "./style.css";

export default function NewsPage() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <section className="articles">
        <article className="stargate">
          <section className="articleContentST">
            {/* <h1 className="flashnews alertnews">FLASH NEWS</h1> */}
            <h3 className="articleTitleST">
              The End of the Spaceship travel ?
            </h3>
            <p className="articleParagraphST">
              A strange artefact has been discovered in Egypt. According to
              scientists it could be a gate to travel instantly from a planet to
              another. Could it be the end of Space X ?
            </p>
            <p className="articleParagraphST">
              With this discovery, theories resurfacing. Dr Daniel Jackson, an
              archaeologist claims that the Egyptian pyramids are much older
              than anyone believes, and even finds out they are of
              extraterrestrial design.
            </p>

            <p className="articleParagraphST">
              Could it be the end of Space X ?
            </p>
          </section>
        </article>
        <section className="rightSide">
          <article className="deathStar triangle-css">
            <section className="articleContentDS">
              <h3 className="articleTitleDS">The Empire in debt</h3>
              <p className="articleParagraphDS">
                The reconstruction of the Death Star is more expansive than
                expected. The Sith Lord Darth Sidious started a crowfunding and
                call for donation.
              </p>
              <p className="articleParagraphDS">
                The destruction of the first Death Star by the Rebel Alliance
                put the Empire in an uncomfortable situation. With the war in
                the outer rim, the cost of energy and materials have tripled.
              </p>
              <p className="articleParagraphDS">How will they recover</p>
            </section>
          </article>
          <article className="musk">
            <section className="articleContentM">
              <h3 className="articleTitleM">
                Death of the 33rd Clone of Elon Musk
              </h3>
              <p className="articleParagraphM">
                His 34th clone takes over of Space X. His shares on the stock
                exchange dropped by 10% !
              </p>
              <p className="articleParagraphM">
                Does Twitter will buy Elon Musk and his company ?
              </p>
              <p className="articleParagraphM">How will they recover</p>
            </section>
          </article>
        </section>
      </section>
    </main>
  );
}
