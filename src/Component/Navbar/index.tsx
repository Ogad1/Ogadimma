import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="flex justify-between bg-amber-200 px-4 py-2">
      <div className="title-logo">
        <Link to="/">OG-CHIBUIKE</Link>
      </div>
      <div className="nav-content">
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
