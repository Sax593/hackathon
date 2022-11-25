import "./displayHome.css";

export default function DisplayHome() {
  return (
    <main className="mainHome">
      <figure className="center">
        <img
          className="logoHome"
          src="../../src/assets/logo.png"
          alt="logoSpaceVerse"
        />

        <div className="logoText">
          <figcaption className="logoTitle">
            <span>S</span>
            <span>P</span>
            <span>A</span>
            <span>C</span>
            <span>E</span>
            <span>V</span>
            <span>E</span>
            <span>R</span>
            <span>S</span>
            <span>E</span>
          </figcaption>
          <figcaption className="catchphrase focus-in-expand">
            TRAVEL THROUGH DIFFERENT UNIVERSES
          </figcaption>
        </div>
      </figure>
    </main>
  );
}
