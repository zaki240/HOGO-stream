import Image from "next/image";

const movies = [
  {
    title: "Bill and Ted excellent Adventure",
    img: "https://m.media-amazon.com/images/M/MV5BMTk3Mjk5MzI3OF5BMl5BanBnXkFtZTcwMTY4MzcyNA@@._V1_.jpg",
    year: "1989",
  },
  {
    title: "Monty Python and the Holy Grail",
    img: "https://flxt.tmsimg.com/assets/p629_p_v8_af.jpg",
    year: "1975",
  },
  {
    title: "Back to the Future",
    img: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    year: "1985",
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    img: "https://m.media-amazon.com/images/I/81aA7hEEykL._AC_UF1000,1000_QL80_.jpg",
    year: "1977",
  },
  {
    title: "Ghostbusters",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPhes93YSmsg5bt_S5eOdxaWoMPDiZDJsv5LidaN50xv1wPgbQ",
    year: "1984",
  },
  {
    title: "The Matrix",
    img: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    year: "1999",
  },
];

function titleShortener(titlestring) {
  if (titlestring.length <= 20) {
    return titlestring;
  } else {
    return titlestring.slice(0, 20 - 3) + " ...";
  }
}

function Card({ title, img, year }) {
  return (
    <div className="card">
      <img src={img} width="{160}" alt={title} />
      <p className="card-title">{titleShortener(title)}</p>
      <p className="card-year">{year}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <nav className="navbar">
        <div className="navbar-container container">
          <h1 className="logo">HOGO</h1>
          <form action="">
            <input type="text" className="search" />
          </form>
          <ul className="menu-items">
            <li>
              <a href="#">Porn</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="carousel"></div>
      <div className="display-movies flex justify-around flex-wrap">
        {movies.map((movie, i) => (
          <Card title={movie.title} img={movie.img} year={movie.year} key={i} />
        ))}
      </div>
    </main>
  );
}

/* <Image src="" width={160} height={100} style={{ width: '160', height: "auto" }} alt="bill and ted" /> */
// <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
