import React, { Component } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import Image from "next/image";
import Imagefu from "next/future/image";
import { ClickAwayListener } from "@material-ui/core";

// import components
import Logo from "../../images/logo.gif";

class Header extends Component {
  state = {
    active: false,
    cheltenham: false,
    surrey: false,
    about: false,
    savedCount: 0,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.savedCount !== this.props.savedCount) {
      this.setState({ savedCount: this.props.savedCount });
    }
  }

  toggleMenu = (e) => {
    e.stopPropagation();
    if (e.target.tagName === "A" && e.target.getAttribute("href") === "#") {
      e.preventDefault();
    }
    if (e.target.id === "aboutus") {
      this.setState((oldstate) => {
        return { ...oldstate, about: true, cheltenham: false, surrey: false };
      });
    } else if (e.target.id === "cheltenham") {
      this.setState((oldstate) => {
        return { ...oldstate, about: false, cheltenham: true, surrey: false };
      });
    } else if (e.target.id === "surrey") {
      this.setState((oldstate) => {
        return { ...oldstate, about: false, cheltenham: false, surrey: true };
      });
    } else {
      this.setState({
        about: false,
        cheltenham: false,
        active: false,
        surrey: false,
      });
    }
  };
  clickawa = (e) => {
    this.setState({
      about: false,
      cheltenham: false,
      active: false,
      surrey: false,
    });
  };

  render() {
    const { active, savedCount } = this.state;

    let navLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item saved">
          <Link href="/saved">
            <a
              className="nav-link active"
              onClick={() => this.setState({ active: false })}
            >
              <i
                className={
                  savedCount > 0 ? "fas fa-heart green" : "far fa-heart"
                }
              />
              <span className="badge badge-light">{savedCount}</span>
              <span>Saved Properties</span>
            </a>
          </Link>
        </li>
        {!active ? (
          <ClickAwayListener onClickAway={this.clickawa}>
            <li className="nav-item dropdown ">
              <Link href="/cheltenham-accommodation">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="cheltenham"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onMouseOver={this.toggleMenu}
                >
                  Cheltenham
                </a>
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{ display: this.state.cheltenham ? "block" : "none" }}
              >
                <Link href="/cheltenham-accommodation/long-term-lets">
                  <a className="dropdown-item" onClick={this.toggleMenu}>
                    Long Term Lets
                  </a>
                </Link>
                <div className="dropdown-divider" />
                <Link href="/cheltenham-accommodation/short-term-lets">
                  <a onClick={this.toggleMenu} className="dropdown-item">
                    Short Term Lets
                  </a>
                </Link>
                <div className="dropdown-divider" />
                <Link href="/cheltenham-accommodation/relocation-breaks">
                  <a onClick={this.toggleMenu} className="dropdown-item">
                    Relocation Breaks
                  </a>
                </Link>

                <div className="dropdown-divider" />
                <Link href="/cheltenham-accommodation/corporate-business-lets">
                  <a onClick={this.toggleMenu} className="dropdown-item">
                    Corporate and Business Lets
                  </a>
                </Link>

                <div className="dropdown-divider" />
                <Link href="/cheltenham-accommodation/holiday-lets">
                  <a onClick={this.toggleMenu} className="dropdown-item">
                    Holiday Lets
                  </a>
                </Link>
              </div>
            </li>
          </ClickAwayListener>
        ) : (
          <>
            <li className="nav-item">
              <Link href="/accommodation">
                <a onClick={this.toggleMenu} className="nav-link">
                  Accommodation
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/corporate">
                <a onClick={this.toggleMenu} className="nav-link">
                  Corporate
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/surrey-accommodation">
                <a onClick={this.toggleMenu} className="nav-link">
                  Surrey Accommodation
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/cheltenham-accommodation">
                <a onClick={this.toggleMenu} className="nav-link">
                  Cheltenham Accommodation
                </a>
              </Link>
            </li>
          </>
        )}

        {!active ? (
          <ClickAwayListener onClickAway={this.clickawa}>
            <li className="nav-item dropdown ">
              <Link href="/surrey-accommodation">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="surrey"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onMouseOver={this.toggleMenu}
                >
                  Surrey
                </a>
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{ display: this.state.surrey ? "block" : "none" }}
              >
                <Link href="/surrey-accommodation/long-term-lets">
                  <a className="dropdown-item" onClick={this.toggleMenu}>
                    Long Term Lets
                  </a>
                </Link>
                <div className="dropdown-divider" />
                <Link href="/surrey-accommodation/short-term-lets">
                  <a onClick={this.toggleMenu} className="dropdown-item">
                    Short Term Lets
                  </a>
                </Link>
                <div className="dropdown-divider" />
                <Link href="/surrey-accommodation/relocation-breaks">
                  <a onClick={this.toggleMenu} className="dropdown-item">
                    Relocation Breaks
                  </a>
                </Link>

                <div className="dropdown-divider" />
                <Link href="/surrey-accommodation/corporate-business-lets">
                  <a onClick={this.toggleMenu} className="dropdown-item">
                    Corporate and Business Lets
                  </a>
                </Link>

                <div className="dropdown-divider" />
                <Link href="/surrey-accommodation/holiday-lets">
                  <a onClick={this.toggleMenu} className="dropdown-item">
                    Holiday Lets
                  </a>
                </Link>
              </div>
            </li>
          </ClickAwayListener>
        ) : (
          <>
            <li className="nav-item">
              <Link href="/accommodation">
                <a onClick={this.toggleMenu} className="nav-link">
                  Accommodation
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/corporate">
                <a onClick={this.toggleMenu} className="nav-link">
                  Corporate
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/surrey-accommodation">
                <a onClick={this.toggleMenu} className="nav-link">
                  Surrey Accommodation
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/cheltenham-accommodation">
                <a onClick={this.toggleMenu} className="nav-link">
                  Cheltenham Accommodation
                </a>
              </Link>
            </li>
          </>
        )}

        {!active ? (
          <li className="nav-item dropdown">
            <ClickAwayListener onClickAway={this.clickawa}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="aboutus"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onMouseOver={this.toggleMenu}
              >
                About
              </a>
            </ClickAwayListener>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdown"
              style={{ display: this.state.about ? "block" : "none" }}
            >
              <Link href="/about-us">
                <a onClick={this.toggleMenu} className="dropdown-item">
                  About Us
                </a>
              </Link>
              <div className="dropdown-divider" />
              <Link href="/about-cheltenham">
                <a className="dropdown-item" onClick={this.toggleMenu}>
                  About Cheltenham
                </a>
              </Link>
              <div className="dropdown-divider" />
              <Link href="/about-surrey">
                <a className="dropdown-item" onClick={this.toggleMenu}>
                  About Surrey
                </a>
              </Link>
            </div>
          </li>
        ) : (
          <>
            <li className="nav-item">
              <Link href="/about-us">
                <a className="nav-link" onClick={this.toggleMenu}>
                  About Us
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/about-cheltenham">
                <a className="nav-link" onClick={this.toggleMenu}>
                  About Cheltenham
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about-surrey">
                <a className="nav-link" onClick={this.toggleMenu}>
                  About Surrey
                </a>
              </Link>
            </li>
          </>
        )}

        <li className="nav-item">
          <Link href="/faq">
            <a onClick={this.toggleMenu} className="nav-link">
              FAQ
            </a>
          </Link>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            href="https://blog.staylets.co.uk/"
            onClick={this.toggleMenu}
          >
            Blog
          </a>
        </li>
        <li className="nav-item">
          <Link href="/contact">
            <a onClick={this.toggleMenu} className="nav-link">
              Contact Us
            </a>
          </Link>
        </li>
        <li className="nav-item lastorangecolor">
          <Link href="/accommodation">
            <a className="nav-link" onClick={this.toggleMenu}>
              Get a quote and book
            </a>
          </Link>
        </li>
      </ul>
    );

    return (
      <>
        <header className="top-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-dark">
              <Link href="/">
                <a className="navbar-brand">
                  <Imagefu
                    src={Logo}
                    alt="Stay Lets Logo"
                    width="100"
                    height="64"
                    // layout="responsive"
                    priority
                  />
                </a>
              </Link>

              <button
                className={
                  !active
                    ? "d-md-none hamburger hamburger--collapse"
                    : "d-md-none hamburger hamburger--collapse is-active"
                }
                type="button"
                onClick={() => this.setState({ active: !active })}
              >
                <>
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                {navLinks}
              </div>
            </nav>
          </div>
        </header>

        <div className={!active ? "mobile-menu closed" : "mobile-menu"}>
          <div className="mobile-nav-wrapper">{navLinks}</div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    savedCount: state.properties.savedCount,
  };
};

export default connect(mapStateToProps)(Header);
