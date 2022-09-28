import React from 'react';
import lib from "../../data/Pictures/lib.jpg";
import {Navbar, Nav,  Button} from 'react-bootstrap';



 export default  function NavA() {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div><Navbar className="nav-bar-styl" expand="lg" sticky="top" style={{ backgroundImage: `url(${lib})` }}>

      <Navbar.Brand href="#" className="nav-bar-brand-styl" style={{ color: "rgb(218,165,32)", fontSize: "35px", textShadow: "initial", letterSpacing: "20px" }}>E-Mouseion</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" style={{ color: "azure", backgroundColor: "azure" }} />
      <Navbar.Collapse id="navbarScroll">

        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '50px', fontSize: '20px', marginRight: '50px' }}
          navbarScroll
        >

        </Nav>
        

      </Navbar.Collapse>
     
     
      <Button variant="outline-secondary" style={{marginRight:"5px", color:"rgb(218,165,32)",border:"solid azure ",width:"100px"}} onClick={refreshPage}>Refresh</Button>

    </Navbar>








    </div>
  );
}
