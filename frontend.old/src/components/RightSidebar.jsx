import "../assets/styles/RightSidebar.css";

function Sidebar() {
  return (
    <>
      <section className="right-sidebar">
        <article id="profile">
          <div id="profile-img"></div>
          <div id="profile-name"></div>
        </article>
        <article id="right-player">
          <div id="song-info">
            <div id="song-img"></div>
            <div id="song-title"></div>
            <div id="song-author"></div>
          </div>
          <div id="song-parameters">
            <div id="time-bar"></div>
          </div>
          <div id="song-controls">
            <div id="previous"></div>
            <div id="play"></div>
            <div id="next"></div>
            <div id="volume"></div>
          </div>
        </article>
        <article id="playback-wrapper">
          <article id="playback-queue">
            <div id="playback-title">
              <h1>Queue</h1>
            </div>
            <div className="playback">
              <div className="playback-img"></div>
              <div className="playback-title"></div>
              <div className="playback-author"></div>
            </div>
            <div className="playback">
              <div className="playback-img"></div>
              <div className="playback-title"></div>
              <div className="playback-author"></div>
            </div>
            <div className="playback">
              <div className="playback-img"></div>
              <div className="playback-title"></div>
              <div className="playback-author"></div>
            </div>
            <div className="playback">
              <div className="playback-img"></div>
              <div className="playback-title"></div>
              <div className="playback-author"></div>
            </div>
            <div className="playback">
              <div className="playback-img"></div>
              <div className="playback-title"></div>
              <div className="playback-author"></div>
            </div>
            <div className="playback">
              <div className="playback-img"></div>
              <div className="playback-title"></div>
              <div className="playback-author"></div>
            </div>
            <div className="playback">
              <div className="playback-img"></div>
              <div className="playback-title"></div>
              <div className="playback-author"></div>
            </div>
            <div className="playback">
              <div className="playback-img"></div>
              <div className="playback-title"></div>
              <div className="playback-author"></div>
            </div>
          </article>
        </article>
      </section>
    </>
  );
}

export default Sidebar;
