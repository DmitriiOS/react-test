import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <nav className='footer-container'>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/profile">Profile</Link></li>
        </nav>
    )
}

export default Footer;