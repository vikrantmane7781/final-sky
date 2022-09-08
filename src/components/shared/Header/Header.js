import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import sky_logo from "../../../Images/sky_logo.png";
import Menu from "../Menu/Menu";

const Header = (props) => {
  const [isActiveSearch, setActiveSearch] = useState(false);
  const [isShortSearch, setIsSearch] = useState(false);

  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <>
      {/* Menubar for Tab and Mobile */}
      <aside
        className={`drawer ${isOpen === true ? "display" : "-no-display"}`}
        id="drawer"
      >
        <div className="drawer-inner-wrapper">
          <button
            className="btn btn--icon close-button"
            onClick={ToggleSidebar}
          >
            <span className="icon close-icon">
              <i class="fa-solid fa-xmark"></i>
            </span>
          </button>
          <ul className="left-hand-menu">
            <li className="menu-item active" data-cta="home menu--home">
              <NavLink to="/" className="anchor" onClick={ToggleSidebar}>
                <span className="text">Home</span>
              </NavLink>
            </li>
            <li className="left-user-menu-wrapper">
              <div className="user-menu-wrapper">
                <ul className="user-menu">
                  <li
                    className="menu-item"
                    data-cta="sign-in navigation-header--sign-in"
                  >
                    <NavLink to="/signin" className="anchor">
                      <span className="text">Sign In</span>
                    </NavLink>
                  </li>
                  <li
                    className="menu-item"
                    data-cta="sign-up navigation-header--sign-up"
                  >
                    <NavLink to="/signup" className="anchor">
                      <span className="text">Sign Up</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-item">
              <NavLink
                to="/"
                className="anchor"
                onClick={ToggleSidebar}
              >
                <span className="text">Movies</span>
              </NavLink>
            </li>
            <li className="menu-item browse">
              <NavLink
                to="/"
                className="anchor"
                onClick={ToggleSidebar}
              >
                <span className="text">Sky Store Premiere</span>
              </NavLink>
            </li>
            <li className="menu-item browse">
              <NavLink
                to="/"
                className="anchor"
                onClick={ToggleSidebar}
              >
                <span className="text">Sale</span>
              </NavLink>
            </li>
            <li className="menu-item active">
              <NavLink
                to="/"
                className="anchor"
                onClick={ToggleSidebar}
              >
                <span className="text">Sky VIP</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/"
                className="anchor"
                onClick={ToggleSidebar}
              >
                <span className="text">TV</span>
              </NavLink>
            </li>
            <li
              className="menu-item menu-item-featured redeem-voucher"
              data-cta="rdvc menu--rdvc"
            >
              <NavLink
                to="/"
                className="anchor"
                onClick={ToggleSidebar}
              >
                <span className="text">Redeem Voucher</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
      <div
        className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
        onClick={ToggleSidebar}
      ></div>

      {/* Mobile Menu Ends */}

      <header className="head-wrapper" id="header-view">
        <div className="header-bar">
          <div className="header-outer-wrapper">
            <div className="header-inner-wrapper">
              <div className="logo-wrapper">
                
                <NavLink to="/" className="logo-anchor anchor">
                  <picture className="logo">
                    <img
                      className="main-logo"
                      src={sky_logo}
                      alt="sky_store_logo"
                    />
                  </picture>
                </NavLink>

                {/*  Sign in  and SignUp  */}

                <div className="header-right-container search-hidden">
                  <nav className="top-user-menu-wrapper">
                    <ul className="top-user-menu">
                      <li
                        className="menu-item"
                        data-cta="sign-in navigation-header--sign-in"
                      >
                        <NavLink to="/signin" className="anchor">
                          <span className="text">Sign In</span>
                        </NavLink>
                      </li>

                      <li
                        className="menu-item"
                        data-cta="sign-up navigation-header--sign-up"
                      >
                        <NavLink to="/signup" className="anchor">
                          <span className="text">Sign Up</span>
                        </NavLink>
                      </li>
                    </ul>
                  </nav>

                  {/* right search button */}

                  <div className="search-inner-wrapper">
                    <section className="search-input__container hide-search">
                      <div className="search-input">
                        <input
                          type="search"
                          className={`search-input__textbox ${
                            isActiveSearch ? "focused" : ""
                          }`}
                          placeholder={
                            isActiveSearch
                              ? "Search for title,actors,directors"
                              : "Search"
                          }
                          onClick={() => setActiveSearch(true)}
                          onBlur={() => setActiveSearch(false)}
                          onChange={(e) => props.setSearchTerm(e.target.value)}
                        />

                        <span className="search-active">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                      </div>
                    </section>
                  </div>
                </div>

                {/* Mobile Search Button */}

                <div className="toggle-search hidden-b1">
                  <div className="google-cast-button"></div>
                  <button
                    className="btn btn--icon icon-clip-fix"
                    onClick={() => setIsSearch(!isShortSearch)}
                  >
                    {isShortSearch ? (
                      <span className="search-text">Cancel</span>
                    ) : (
                      <span className="search-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </span>
                    )}
                  </button>
                </div>

                {isShortSearch ? (
                  <input
                    type="search"
                    placeholder="Search for title, actors, directors"
                    name=""
                    className="searchinputMobile"
                  />
                ) : null}
              </div>
            </div>

            {/* Navigation section */}
            <Menu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
