import React, { useState } from "react";
import { Button, ButtonToolbar, Nav, Offcanvas } from "react-bootstrap";
import "./Header.css";
import img from "../image/tahmina.jpg";

//import { HashLink as Link } from 'react-router-hash-link'
import { Link, animateScroll as scroll } from "react-scroll";
import { HashLink } from "react-router-hash-link";

const options = [
  {
    name: "Enable both scrolling & backdrop",
    scroll: true,
    backdrop: true,
  },
];

const Header = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const toggleShow = () => setShow((s) => !s);

  // ---------------------
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Tahmina_Akter_cv.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        alink.click();
      });
    });
  };
  return (
    <section>
      <div className="p-5" id="home">
        <div className="d-flex justify-content-between ">
          <p className="logo-font text-white">Tahmina Akter</p>
          <div>
            <Button variant="dark" onClick={toggleShow} className="me-2">
              <i class="fas fa-bars fs-4 "></i>
            </Button>
            <Offcanvas
              className="bg-dark offcanvas-size"
              show={show}
              onHide={handleClose}
              {...props}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="text-white rounded-3 d-flex justify-content-center">
                <ul>
                  <li>
                    {/* <Nav.Link
                      className='font-style menu-style'
                      as={HashLink}
                      to='/home#about'
                    >
                      about
                    </Nav.Link> */}

                    <a
                      className="text-decoration-none font-style menu-style "
                      href="#home"
                    >
                      <i class="fas fa-home pe-2"></i> Home
                    </a>
                  </li>
                  <li className=" my-5">
                    {/* <HashLink smooth to='/home#about'>
                      about
                    </HashLink>
                    ; */}
                    <a
                      className="text-decoration-none font-style menu-style my-5 px-4"
                      href="#about"
                    >
                      <i class="fas fa-user pe-1"></i>About
                    </a>
                  </li>
                  <li className=" mb-5">
                    <a
                      className="text-decoration-none font-style menu-style"
                      href="#project"
                    >
                      <i class="fas fa-shield-virus pe-1"></i> Projects
                    </a>
                  </li>
                  <li className="my-5">
                    <a
                      className="text-decoration-none font-style menu-style"
                      href="#education"
                    >
                      <i class="fas fa-file pe-2"></i>Resume
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-decoration-none font-style menu-style"
                      href="#contact"
                    >
                      <i class="fas fa-phone-square-alt "></i> Contact
                    </a>
                  </li>
                  <li className=" my-5">
                    <a
                      className="text-decoration-none menu-style font-style px-4"
                      href="#skill"
                    >
                      <i class="fas fa-cog pe-2"></i> Skills
                    </a>
                  </li>
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
        <div className="row g-2">
          <div className="col-lg-4 col-md-4 col-12 header-bg1 d-flex justify-content-center align-items-center pro-pic">
            <div>
              <div>
                <img
                  className="img-fluid rounded-circle img-size"
                  src={img}
                  alt=""
                />
              </div>
              <div className="mt-5 flex justify-center items-center">
                <img src="https://img.icons8.com/fluency-systems-filled/48/000000/github.png" />
                <img src="https://img.icons8.com/ios-glyphs/48/000000/linkedin.png" />
                <img src="https://img.icons8.com/ios-filled/48/000000/facebook-new.png" />
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-12 header-bg2 text-start">
            <p className="text-white font-style fs-4">Web Developer</p>
            <h1 className="mb-4 name">Tahmina Akter</h1>
            <p className="text-white text-wrap font-style fs-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              veritatis necessitatibus dolorum amet ipsa sunt dolorem id
              exercitationem nam illum totam nisi assumenda, voluptatem sint in.
              Cumque repudiandae eaque aspernatur incidunt, sapiente quos, sunt
              ad maiores in ipsa, consequatur suscipit sed cupiditate! Quae
              ratione repudiandae tempora velit, enim non sit!
            </p>
            <div className="block sm:flex flex-row mt-8">
              {" "}
              <button
                onClick={onButtonClick}
                className="px-4 py-2 font-bold rounded-3xl text-pink-800 border-2  border-pink-800"
              >
                Download CV
              </button>
              {/* <button onClick={onButtonClick}>Download PDF</button> */}
              <button className="mt-2 sm:mt-0 ml-2 md:ml-8 px-4 py-2 font-semibold rounded-3xl  border-2 border-pink-800  bg-pink-800">
                <a className="text-decoration-none text-black" href="#contact">
                  Contact
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
