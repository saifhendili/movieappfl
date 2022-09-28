
import React, { useState } from 'react';
import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';


import '../../components/component.css';
import lib from "../../data/Pictures/lib.jpg";

import { NavLink,useNavigate } from 'react-router-dom';


export default function NavBar(){ 
  const [keyword, setKeyword] = useState();
  let history = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };






 
      const refreshPage = ()=>{
        window.location.reload();
     }
    return (
      <div></div>
//    <Navbar className="nav-bar-styl" expand="lg" sticky="top" style={{ backgroundImage: `url(${lib})`}}     >              
            
//                 <Navbar.Brand href="/App"  className="nav-bar-brand-styl" style={{   }}    > <NavLink to={`/`} style={{textDecoration:"none",color:"rgb(218,165,32)", fontSize:"35px",textShadow:"initial" , letterSpacing:"20px" }} >   E-Mouseion </NavLink>  </Navbar.Brand>
//                   <Navbar.Toggle aria-controls="navbarScroll" style={{color:"azure",backgroundColor:"azure" }} />
//                     <Navbar.Collapse id="navbarScroll"  >
//                     <NavDropdown
//               id="nav-dropdown-dark-example"
//               title="DISCOVER"
//               menuVariant="dark"
//               style={{marginLeft:"5px",fontSize:"20px", color:"azure"     }}
              
//             >
//               <NavDropdown.Item href="#action/3.1"   style={{display:"block",  width:"800px", height:"300px"   }}>
//               <div class="genres-list form-group"   style={{float: "left",
//     padding: "20px"
// }}>
//                 <h3 style={{color:"rgb(218,165,32)"}}>Genres</h3>
//               <ul style={{columnCount: "2",columnGap: "30px",listStyle: "none",marginBottom: "10px"}}      >
//                 <li><a href="">Action &amp; Adventure</a></li>
//               <li><a href="">Bios &amp; History</a></li>
//               <li><a href="">Children's</a></li>
//               <li><a href="">Fantasy</a></li>
//               <li><a href="">Historical fiction</a></li>
//               <li><a href="">Horror</a></li>
//               <li><a href="">Literary Fiction</a></li>
//               <li><a href="">Mystery &amp; Thriller</a></li>
//               <li><a href="">Young adult</a></li>
//               <li><a href="">Science Fiction</a></li></ul>
//               </div>

//               <div class="resources-list form-group" style={{float: "left",
//     padding: "20px",
//     height: "300px" , backgroundColor:"" ,marginLeft:"40px"  }}    >
//                 <h3 style={{color:"rgb(218,165,32)"}}   >Resources</h3>
//               <ul style={{columnCount: "1",columnGap: "30px",listStyle: "none",marginBottom: "10px",    }}  >
//                 <li><a href="/authors.php">Authors</a></li>
//               <li><a href="/language.php">Languages</a></li>
//               <li><a href="/categories">Genres</a></li>
//               <li><a href="/articles">Articles</a></li>
//               <li><a href="/featured-authors">Author Interviews</a></li>
//               <li><a href="/discuss">Discuss</a></li></ul>
//               </div>
//               </NavDropdown.Item>
             
              
//             </NavDropdown>
//                       <Nav
//                         className="mr-auto my-2 my-lg-0"
//                         style={{ maxHeight: '50px', fontSize:'20px', marginRight:'50px' }}
//                         navbarScroll
//                       >
                                             
//                        </Nav>
//                                <div style={{width:'700px' ,display:'flex', justifyContent:'space-around'}}>
//                                <form onSubmit={submitHandler} className="input-group">
//                     <input
//                       type="search"
//                       className="form-control rounded search"
//                       placeholder="Search"
//                       onChange={(e) => setKeyword(e.target.value)}
//                     />
//                     <button type="submit" className="search-button">
//                       search
//                     </button>
//                   </form>
                                          
                                              
//                                               <Button  variant="outline-secondary" style ={{marginLeft:'20px'}} onClick={refreshPage}>Reset</Button>                                      
//                                 </div>
//                     </Navbar.Collapse> 
//     </Navbar>



    )

}





  