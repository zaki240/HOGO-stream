import { BsStarFill } from "react-icons/bs";

const placeholdertag = [
  {
    tag: "Tag1",
    link: "link",
  },
  {
    tag: "Tag2",
    link: "link",
  },
  {
    tag: "Tag3",
    link: "link",
  },
  {
    tag: "Tag4",
    link: "link",
  },
];

const recommendCards = [
  {
    img: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    title: "Recommended Movie (year)",
    rating: "9.8",
    tags: placeholdertag,
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    title: "Recommended Movie (year)",
    rating: "9.8",
    tags: placeholdertag,
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    title: "Recommended Movie (year)",
    rating: "9.8",
    tags: placeholdertag,
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    title: "Recommended Movie (year)",
    rating: "9.8",
    tags: placeholdertag,
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    title: "Recommended Movie (year)",
    rating: "9.8",
    tags: placeholdertag,
  },
];

function RecoCard({ img, title, rating, tags }) {
  return (
    <div className="reco-card flex">
      <div className="reco-img">
        <img src={img} alt="" />
      </div>
      <div className="reco-desc">
        <h3 className="">{title}</h3>
        <div className="flex items-center gap-1 reco-rat">
          <BsStarFill className="text-blue-200" />
          <span>{rating}</span>
        </div>
        <div className="reco-tags">
          {tags.map((tag, i) => (
            <a href={tag.link} key={i}>
              {tag.tag} &nbsp;
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function page({ params }) {
  //   return <div>movie title: {params.movie}</div>;
  return (
    <main className="min-h-screen  flex flex-col items-center p-2 pt-4">
      <div className="fullcontainer">
        <div className="mainframe">
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
                {placeholdertag.map((tag, i) => (
                  <a href={tag.link} key={i}>
                    {tag.tag} &nbsp;
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="reco-tab">
          <h1>RECOMMENDATION</h1>
          {recommendCards.map((card, i) => (
            <>
              <RecoCard
                img={card.img}
                title={card.title}
                rating={card.rating}
                tags={card.tags}
                key={i}
              />
              <hr className="human-resource" />
            </>
          ))}
        </div>
      </div>
    </main>
  );
}
