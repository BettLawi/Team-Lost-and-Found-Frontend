import React, { useState } from 'react';
import './Navbar.css';
import { Link ,useNavigate} from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CgSearchFound } from 'react-icons/cg';

function Navbar({ role }) {
  const [click, setClick] = useState(false);

  const history = useNavigate();

  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    // Clear JWT access key from local storage
    localStorage.removeItem('token');

    // Redirect to the signup page
    history('/');
  };

  return (
    <div className="header">
      <div className="search">
        <Link to="/HomePage" id="lost">
          Lost & Found
        </Link>
        <CgSearchFound id="search" />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/returned">Returned items</Link>
        </li>
        <li>
          <Link to="/lost">Lost items</Link>
        </li>
        <li>
          <Link to="/found">Found items</Link>
        </li>
        <li>
          <Link to="/received">Received rewards</Link>
        </li>

        {role === 'Admin' ? (
          <li>
            <Link to="/pending">Pending items</Link>
          </li>
        ) : (
          <li>
            <button onClick={handleLogout}>Log Out</button>
          </li>
        )}
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={40} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={35} style={{ color: 'black' }} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
