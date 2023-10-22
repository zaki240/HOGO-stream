export default function page({ params }) {
  //   return <div>movie title: {params.movie}</div>;
  return (
    <main className="min-h-screen  flex flex-col items-center p-2 pt-4">
      <div className="fullcontainer">
        <div className="screen-container">
          <div className="screen-subcontainer">
            <iframe
              className="screen"
              src="https://www.youtube.com/embed/y9n6HkftavM"
              allow="fullscreen;"
            ></iframe>
          </div>
          <div className="frame-setting">
            <button>setting one</button>
            <button>setting two</button>
            <button>setting three</button>
          </div>
        </div>
        <div className="movie-description">
          <img
            src="https://m.media-amazon.com/images/M/MV5BMzU3YWYwNTQtZTdiMC00NjY5LTlmMTMtZDFlYTEyODBjMTk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
            alt=""
          />
          <div className="description">
            <h1>Title of Movie: Second Title (year)</h1>
            <div className="subinfo">
              <p>Info 1</p>
              <p>Info 2</p>
              <p>Info 3</p>
            </div>
            <div className="rating">
              9.9 / 10
              {/* <div class="rating-circle">
                <progress value="75" min="0" max="100">
                  75%
                </progress>
              </div> */}
            </div>
            <hr />
            <div className="tags">
              <a href="">Tag 1</a>
              <a href="">Tag 2</a>
              <a href="">Tag 3</a>
              <a href="">Tag 4</a>
              <a href="">Tag 5</a>
              <a href="">Tag 6</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
