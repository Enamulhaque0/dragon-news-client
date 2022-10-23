import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { FaUser} from "react-icons/fa";
import { Button, Image, NavDropdown } from "react-bootstrap";
import { HiOutlineLogout} from "react-icons/hi";


const Header = () => {
  const { user,logOut } = useContext(AuthContext);
  return (
    <Navbar 
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container >
        <Navbar.Brand className="fw-bolder" >
          
          <Link to="/">Dragon News</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav className="flex justify-content-center align-items-center">
            <>
            
            {
                                user?.uid ?
                                    <>
                                        <span className="text-danger m-2">{user?.displayName}</span>
                                        <Button  onClick={logOut} className="border ms-2 " variant="outline-secondary">Log out  <HiOutlineLogout></HiOutlineLogout> </Button>
                                    </>
                                    :
                                    <>
                                    <Button className="border-0  ms-1" variant="outline-secondary">  <Link to='/login'>Login</Link> </Button>
                                    <Button className="border rounded ms-1" variant="outline-secondary">  <Link to='/register'>Register</Link> </Button>
                                       
                                        
                                    </>
                            }
            
            </>


            <Link className="m-2 " to="/profile" >



            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser></FaUser>
                            }
            </Link>
          
          </Nav>



          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
