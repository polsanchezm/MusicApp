import "../assets/styles/MainHome.css";

function Home() {
  return (
    <>
      <section id="main-home">
        <article id="song-wrapper">
          <header className="title">
            <h1>Songs</h1>
          </header>
          <article id="songs">
            <div className="song">
              <button className="song-button"></button>
            </div>
            <div className="song">
              <button className="song-button"></button>
            </div>
            <div className="song">
              <button className="song-button"></button>
            </div>
            <div className="song">
              <button className="song-button"></button>
            </div>
            <div className="song">
              <button className="song-button"></button>
            </div>
            <div className="song">
              <button className="song-button"></button>
            </div>
          </article>
        </article>
        <article id="album-wrapper">
          <header className="title">
            <h1>Albums</h1>
          </header>
          <article id="albums">
            <div className="album">
              <button className="album-button"></button>
            </div>
            <div className="album">
              <button className="album-button"></button>
            </div>
            <div className="album">
              <button className="album-button"></button>
            </div>
            <div className="album">
              <button className="album-button"></button>
            </div>
            <div className="album">
              <button className="album-button"></button>
            </div>
            <div className="album">
              <button className="album-button"></button>
            </div>
          </article>
        </article>
        <article id="artist-wrapper">
          <header className="title">
            <h1>Artists</h1>
          </header>
          <article id="artists">
            <div className="artist">
              <button className="artist-button"></button>
            </div>
            <div className="artist">
              <button className="artist-button"></button>
            </div>
            <div className="artist">
              <button className="artist-button"></button>
            </div>
            <div className="artist">
              <button className="artist-button"></button>
            </div>
            <div className="artist">
              <button className="artist-button"></button>
            </div>
            <div className="artist">
              <button className="artist-button"></button>
            </div>
          </article>
        </article>
      </section>
    </>
  );
}

export default Home;
