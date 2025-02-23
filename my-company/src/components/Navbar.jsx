import { Link } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
    backgroundColor: "#333",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    margin: "0 10px",
  };

  return (
    <nav style={navbarStyle}>
      <h2 style={{ color: "white", marginLeft: "10px" }}>My Company</h2>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
