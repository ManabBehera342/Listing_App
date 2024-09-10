/* import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import './Navbar.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {

    window.addEventListener('scroll', () => {
      window.scrollY>50?setSticky(true):setSticky(false);
    })
  }, []);

  return (
    
    <nav className={`container ${sticky?'dark-nav':''}`}>
      <div className="logo"><img src="./images/logo.png" alt="logo" className='logo'/>
      </div>
        
      <ul>
                  <li><Link to='landing' smooth={true} offset={0} duration={500}>HOME</Link></li>
                  <li><Link to='about' smooth={true} offset={-260} duration={500}>ABOUT</Link></li>
                  <li><Link to='faq' smooth={true} offset={-150} duration={500}>FAQ</Link></li>
               
                <button className="login"><Link to='landing' smooth={true} offset={0} duration={500}>LOGIN</Link></button>
                
                <button className="signup"><Link to='landing' smooth={true} offset={0} duration={500}>SIGNUP</Link></button>
                </ul>
               

    </nav>
  );
};

export default Navbar;
 */


import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import './Navbar.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <div className="logo">
          <Link to='landing'><img src="./images/logo.png" alt="logo" className="logo" /></Link>
        </div>
      <ul className="menu">
        <li><Link to="landing" smooth={true} offset={0} duration={500}>HOME</Link></li>
        <li><Link to="about" smooth={true} offset={-60} duration={500}>ABOUT</Link></li>
        <li><Link to="faq" smooth={true} offset={500} duration={500}>FAQ</Link></li>
        <li className="auth-buttons">
          <button className="login"><Link to="login" smooth={true} offset={0} duration={500}>LOGIN</Link></button>
          <button className="signup"><Link to="signup" smooth={true} offset={0} duration={500}>SIGNUP</Link></button>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
