import { Link, useLocation } from "react-router-dom"

const NavBar = () => {
  const location = useLocation()

  return (
    <nav className="NavBar max-w-xl w-full mx-auto px-4 pt-20 pb-3">
      <h1 className="text-5xl text-center font-medium pb-3">
        Twitter Profile Finder
      </h1>
      <div className="text-center">
        <Link
          to="/"
          className={
            location.pathname === "/"
              ? `border-b-4 border-slate-700 px-2 py-1`
              : "px-2 py-1"
          }
        >
          Try It
        </Link>
        <Link
          to="/why"
          className={
            location.pathname === "/why"
              ? `border-b-4 border-slate-700 px-2 py-1`
              : "px-2 py-1"
          }
        >
          Why?
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
