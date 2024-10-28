import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" flex justify-around items-center bg-emerald-200 p-3">
      <Link to="/">
        <h1>flash card</h1>
      </Link>
      <div className="flex gap-8 ">
        <Link to="/createFolder">Create folder</Link>
        <Link to="/createSet">Create set</Link>
      </div>
    </header>
  );
}

export default Header;
