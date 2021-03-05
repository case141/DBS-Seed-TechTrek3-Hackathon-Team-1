import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { Link, useHistory } from 'react-router-dom'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => { 
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    history.replace('/login');
  }
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider  value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              DBS SEED
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu> 
              <ul className="nav nav-tabs bg-dark">
                <li className="nav-item">
                  <Link to="/buy-sell-asset" className="nav-link">
                    Buy and Sell Asset
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/wallet-balance" className="nav-link">
                    Wallet Balance
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/current-pricing" className="nav-link">
                    Current Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/historical-pricing" className="nav-link">
                    Historical Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/transaction" className="nav-link">
                    Transaction
                  </Link>
                </li>
                <li className="nav-item" style={{ cursor: 'pointer' }}>
                  <a onClick={handleLogout} className="nav-link">
                    Sign Out
                  </a>
                </li>
              </ul>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/login">Login</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
