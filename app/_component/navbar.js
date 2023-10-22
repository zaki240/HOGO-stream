export default function Navbar() {
  return (
    <nav className="w-full h-12 bg-[#ffffff30] text-white">
      <div className="w-full h-full px-3 md:px-16 flex justify-between items-center">
        <div className="">
          <h1 className="text-base">HOGO</h1>
        </div>
        <form action="" className="w-1/2">
          <input
            type="text"
            className="w-full pl-3 py-1 rounded-full bg-transparent border border-white focus:outline-none"
            placeholder="search"
          />
        </form>
        <details className="w-10 h-10 md:hidden">
          <summary className="w-10 h-9 list-none flex flex-col justify-evenly items-center border border-white rounded-md">
            <div className="w-6 h-[2.5px] bg-white rounded"></div>
            <div className="w-6 h-[2.5px] bg-white rounded"></div>
            <div className="w-6 h-[2.5px] bg-white rounded"></div>
          </summary>
          <div>
            <ul className="w-28 relative -left-16 box-border top-3 px-3 py-2 bg-[#ffffff30] rounded-md">
              <li className="">
                <a href="#">List</a>
              </li>
              <li className="">
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </details>
        <ul className="hidden md:flex gap-10 lg:gap-20 top-3 px-3 py-2">
          <li className="">
            <a href="#">List</a>
          </li>
          <li className="">
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
