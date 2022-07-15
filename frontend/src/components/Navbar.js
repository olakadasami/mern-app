import {Link} from "react-router-dom";


const Navbar = props => {
  return (
    <header className="header">
        <div className="logo">
            <h1>Logo</h1>
        </div>

        <nav className="header__nav">
            <Link to="/">
                <h1>Sammy's Workouts</h1>
            </Link>
            <Link to="/contact">     
                <h1>Contact Us</h1>
            </Link>
        </nav>
    </header>
  )
}

export default Navbar