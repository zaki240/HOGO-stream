export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <h1 className="logo">HOGO</h1>
        <form action="">
          <input type="text" className="search" placeholder="search" />
        </form>
        <ul className="menu-items">
          <li>
            <a href="#">List</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
