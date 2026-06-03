import { Link } from 'react-router-dom';
import './App'
interface NavbarProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (val: boolean) => void;
}

// Function ke andar props ko destructure karein
function Navbar({ isAuthenticated, setIsAuthenticated }: NavbarProps) {
  return (
    <nav>
      <div className="navbar">
        
        <Link to="/" className="logo">Company</Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/internship">Internships</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/techBlogs">Tech Blogs</Link>
        <Link to="/InternForm">
          <button style={{backgroundColor:'purple', color: 'white', width: '150px', height: '50px', padding: '10px'}}>
            Intern Registration
          </button>
        </Link>
        {/* Logout button add karna zaroori hai taake logout ho sake */}
        <button onClick={() => setIsAuthenticated(false)}>Logout</button>
      </div>
    </nav>
  )
}

export default Navbar;