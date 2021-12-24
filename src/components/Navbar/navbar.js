import React from 'react';
import { Navbar, 
  Button 
} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav, NavDropdown } from 'react-bootstrap';
// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink
// } from './Navbar';
// import LogoName from '../../images/apple-seeklogo.com.svg'
// import Modal from "../../pages/Login/Loginmodal.jsx";
import  { useState } from "react";
// import LogoName from '../../assets/apple-seeklogo.com.svg'
import { FaMagento } from 'react-icons/fa';
import { ModalLogin } from '../Login/ModalLogin';
// import { ModalRegister } from '../Register/ModalRegis';
import { ModalRegister } from '../Register/ModalRegis';
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom';



// import { ModalLogin } from '../Login/ModalLogin';



const Navbarindex = () => {



   const [showModal, setShowModal] = useState(false);
   const [showModalRes, setShowModalRes] = useState(false);


   const openModal = () => {
    setShowModal(prev => !prev);
   }

  //  const openModalres = () => {
  //   setShowModalRes(prev => !prev);
  //  }

   const datauser = () => {
    //  console.log("dddddssss");
    // const backendData = localStorage.getItem("access_token")
    const backendData = sessionStorage.getItem("access_token")
    // console.log("backend",localStorage.getItem("access_token"));
    var decode = jwt_decode(backendData);
    // console.log("decode1",decode);
    // console.log("decode ชื่อ",decode.firstname);
    // console.log("decode นามากุล",decode.lastname);
    var userdata = decode.firstname  + "  " + decode.lastname
    // console.log("ชื่อ",userdata);
    return userdata
  
   }
  //  datauser()

   const logOut = () => {
    // localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
    // localStorage.removeItem("access_token")
    // window.location.reload("");

    // window.location.origin+"/"

  }
   const renderRegisterLoginOrLogout = () => {
    // if (localStorage.getItem("access_token")) {
    if (sessionStorage.getItem("access_token")) {
        return (
          <Nav>
          <NavDropdown  title={<span className=" my-auto"> {datauser()} </span>} id="collasible-nav-dropdown" >
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">Change Password</NavDropdown.Item>
            {/* <Nav.Link>   
            </Nav.Link> */}
          </NavDropdown>

          {/* <Nav.Link as={Link} to="#" onClick={logOut} >logout</Nav.Link> */}

          <Button  onClick={logOut}     Style="line-height:0.5;" variant="outline-primary" >
            <Nav.Link  >SIGN OUT</Nav.Link>
          </Button>

          {/* <Nav.Link onClick={logOut}  >
                            <Link to="#" className="linknav"> SIGN OUT </Link>
          </Nav.Link> */}
          </Nav>
            
        )
    } else {
        return (
                    <Nav >
                        <Button  onClick={openModal} Style="line-height:0.5; margin-left:10px" variant="outline-primary" >
                          <Nav.Link  >Login</Nav.Link>
                        </Button>

                        {/* <Nav.Link as={Link} to="#" onClick={openModal} >login</Nav.Link>
                        <Nav.Link as={Link} to="#" onClick={openModalres} >register</Nav.Link> */}

                        {/* <Button  onClick={openModal} Style="line-height:0.5; margin-left:10px" variant="outline-primary" > */}
                        {/* <Nav.Link onClick={openModal}  >
                            <Link to="#" className="linknav"> SIGN IN  </Link>
                        </Nav.Link> */}
                        {/* </Button> */}

                        {/* <Nav.Link onClick={openModalres}  >
                            <Link to="#" className="linknav"> SIGN UP  </Link>
                        </Nav.Link> */}

                        {/* <Button  onClick={openModalres} variant="outline-primary" Style="line-height:0.5;margin-left:10px" >
                          <Nav.Link >SIGN UP </Nav.Link>
                        </Button> */}
                        <Nav.Link > 
                          <Link to="/signup" className="linknav"> SIGN UP
                          </Link>
                        </Nav.Link>

                      </Nav>
        )
    }
  }
    
  return (


        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" Style='background-color:#101522' >
                  {/* <Navbar collapseOnSelect expand="lg" Style='background:#101522'> */}
              <Container>
              {/* <Navbar.Brand href="/" >Home</Navbar.Brand> */}
              {/* <Navbar.Brand href="/" Style="font-size:2rem" ><FaMagento /></Navbar.Brand> */}
              <Link to="/">
                <Navbar.Brand Style="font-size:2rem" ><FaMagento /></Navbar.Brand>
              </Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" Style="border-color: rgb(255,102,203)" navbar-light="true"/>
                  <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto" >
                      {/* <Link to="/report"> */}
                        <Nav.Link > 
                          <Link to="/report" className="linknav"> Report
                          </Link>
                        </Nav.Link>
                      {/* <Nav.Link href="/report"   >Report</Nav.Link> */}
                      {/* </Link> */}
                      {/* <Nav.Link href="/pricing" >Pricing</Nav.Link> */}
                      <Nav.Link > 
                          <Link to="/pricing" className="linknav"> Pricing
                          </Link>
                        </Nav.Link>
                        <Nav.Link > 
                          <Link to="/post" className="linknav"> Post
                          </Link>
                        </Nav.Link>

                      <NavDropdown  title={<span className=" my-auto">Dropdown</span>} id="collasible-nav-dropdown" >
                            
                            <NavDropdown.Item   >
                              <Link to="#" className="linknav"> Action </Link>
                            </NavDropdown.Item>
                                  <NavDropdown.Divider />
                            <NavDropdown.Item  >
                              <Link to="#" className="linknav"> Another action </Link>
                            </NavDropdown.Item>
                                  <NavDropdown.Divider />
                            <NavDropdown.Item >
                              <Link to="#" className="linknav"> Something </Link>
                            </NavDropdown.Item>
                                  <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4"  >
                              <Link to="#" className="linknav"> Separated link </Link>
                            </NavDropdown.Item>

                          {/* <NavDropdown.Item href="#action/3.4"  >Separated link</NavDropdown.Item> */}
                      </NavDropdown>
                      
                    </Nav>
                    <Nav >
                      {renderRegisterLoginOrLogout()}
                    </Nav>
                  </Navbar.Collapse>
                  
              </Container>
            </Navbar>
              <ModalLogin showModal={showModal} setShowModal={setShowModal} />
             <ModalRegister showModalRes={showModalRes} setShowModalRes={setShowModalRes} />

      </>
     );
}


export default Navbarindex;