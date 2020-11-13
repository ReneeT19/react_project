import React from "react";
import { MDBCol, MDBContainer, MDBIcon, MDBBtn, MDBFooter } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

const Footer = () => {
  return (
    <MDBFooter color="cyan" className="font-small darken-3 pt-0">
<MDBContainer >
      <a href="#!" className="fb-ic mr-3">
        <MDBIcon fab icon="facebook-f" />
      </a>
      <a href="#!" className="tw-ic mr-3">
        <MDBIcon fab icon="twitter" />
      </a>
      <a href="#!" className="gplus-ic mr-3">
        <MDBIcon fab icon="google-plus-g" />
      </a>
      <a href="#!" className="li-ic mr-3">
        <MDBIcon fab icon="linkedin-in" />
      </a>
      <a href="#!" className="ins-ic mr-3">
        <MDBIcon fab icon="instagram" />
      </a>
      <a href="#!" className="pin-ic mr-3">
        <MDBIcon fab icon="pinterest" />
      </a>
      <a href="#!" className="yt-ic mr-3">
        <MDBIcon fab icon="youtube" />
      </a>
      <a href="#!" className="vk-ic mr-3">
        <MDBIcon fab icon="vk" />
      </a>
      <a href="#!" className="so-ic mr-3">
        <MDBIcon fab icon="stack-overflow" />
      </a>
      <a href="#!" className="slack-ic mr-3">
        <MDBIcon fab icon="slack" />
      </a>
      <a href="#!" className="git-ic mr-3">
        <MDBIcon fab icon="github" />
      </a>
      <a href="#!" className="comm-ic mr-3">
        <MDBIcon icon="comments" />
      </a>
      <a href="#!" className="email-ic mr-3">
        <MDBIcon icon="envelope" />
      </a>
      <a href="#!" className="dribbble-ic mr-3">
        <MDBIcon fab icon="dribbble" />
      </a>
    </MDBContainer>
    <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          Chuhan "Renee" Thomsen &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://github.com/ReneeT19/react_project"> Github </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;