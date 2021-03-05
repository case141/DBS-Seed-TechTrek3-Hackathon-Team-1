import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom'
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
                <NavItem>
                  <Link to='/buy-sell-asset'>BuySellAsset</Link>
                </NavItem>
                <NavItem>
                <Link to='/wallet-balance' >WalletBalance</Link>
                </NavItem>
                <NavItem>
                <Link to='/current-pricing' >CurrentPricing</Link>
                </NavItem>
                <NavItem>
                <Link to='/transaction' >Transaction</Link>
                </NavItem>
                <NavItem>
                <Link to='/historical-pricing' >HistoricalPricing</Link>
                </NavItem>
                {/* <NavLinks
                  to="/wallet-balance"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  View Wallet Balance
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="currentPricingAsset"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Current Pricing Asset
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="historicalPricing"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Historical Pricing
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="pastTransaction"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Past Transaction
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="buy-sell-asset"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Buy Sell Asset
                </NavLinks> */}
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
