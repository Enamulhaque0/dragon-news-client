import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";

import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTwitch,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import BrandCarousel from "../BrandCarousel/BrandCarousel";


const RightSideNav = () => {

  const {gitHubLogin,providerLogin,setUser,setLoading}= useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider()
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';


  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            if(user){
              navigate(from, {replace: true});
              setUser(user);
            setLoading(false);
          }
              
           
            
           
          
            
        })
        .catch(error => console.error(error))
       
      //   .finally(() => {
      //     setLoading(true);
      // })

}

  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} className="mb-2" variant="outline-primary">
          {" "}
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button onClick={gitHubLogin} variant="outline-dark">
          {" "}
          <FaGithub></FaGithub> Login with Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp /> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch /> Twitch
          </ListGroup.Item>
          
        </ListGroup>
        <div>
          <BrandCarousel></BrandCarousel>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
