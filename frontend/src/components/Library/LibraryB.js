import React,{useEffect, useState} from 'react'; 

import { Container,  Nav, Navbar, Spinner } from "react-bootstrap";

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ReactStars from 'react-stars';
import libr from "../../data/Pictures/libr.jpeg";
import logo from "../../data/Pictures/logo.jpg";
import {  Form  } from "react-bootstrap";

import fire from "../../data/Pictures/fire.png";
import NavBar from "./NavBar";
import OffCanvasExample from './sideNav';
import './library.css';
import { useDispatch, useSelector } from "react-redux";
import { BooksList } from './BooksList';
import { useParams } from 'react-router';
import { GetLangague } from '../../Redux/Actions/BookActions';
const LibraryB = (match) => {
  const{keyword}=useParams(match.keyword);
  const [Search, setSearch] = useState('');
  const [Rating, setRating] = useState(5);
  const [Langauge, setLangauge] = useState("");

  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const GetLanguage = useSelector((state) => state.GetLanguage);
  const { loading, Lang } = GetLanguage;

useEffect(() => {

  
  dispatch(GetLangague());

},[])
  

  return (loading?<Spinner/>:
    <>
      <div className="library"  >
                <NavBar/>
      <div>
        <Navbar bg="light" variant="light">
      
        <Container>
        <img src={fire} alt="fire" style={{zoom:"1.5"}}  />
          <Navbar.Brand href="#home">POPULAR GENRES</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Romance</Nav.Link>
            <Nav.Link href="#features">Mystery &amp; Thriller</Nav.Link>
            <Nav.Link href="#pricing">Science Fiction</Nav.Link>
             <Nav.Link href="#pricing">Bios &amp; History</Nav.Link>
             <input className="input-text input-text--border-radius input-text--style-1" type="text" onChange={(e)=>setSearch(e.target.value)} id="main-search" placeholder="Search" />
          </Nav>
        </Container>
      </Navbar>
      </div>
      <div>
      <>
      <Button variant="primary" onClick={handleShow} className="me-2" style={{marginTop:"12%" , height:"300px",backgroundImage: `url(${logo})`, border:"azure",position:"fixed"
	
}}      >
      
       <span style={{writingMode:"vertical-lr",textOrientation:"upright"}} >SEARCH HERE</span> 
      </Button>
      <Offcanvas show={show} onHide={handleClose} style={{backgroundImage: `url(${libr})`, width:"20%",marginTop:"5%"}}   >
        
        <Offcanvas.Body>
        <div className='rating-by-stars' style={{marginTop:'0px', width:'200px',height:"150px", display:'flex', flexDirection:' column', justifyContent:'center',padding:"5px"       }}>
                                                 <h4 style={{color:"azure"  }} ><i>SEARCH BY RATING :</i></h4>                                         
                                                 <ReactStars  
                                                 onChange={(item) => setRating(item)}                                         
                                                     count={5}
                                                           size={25}
                                                           isHalf={false}
                                                           emptyIcon={<i className="far fa-star"></i>}
                                                           halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                           fullIcon={<i className="fa fa-star"></i>}
                                                           activeColor="#ffd700"
                                                          value={Rating}  
                                                          

                                                           
                                                  />  
                                           </div>                                    
     
     <div style={{marginTop:"10px"}}>
     <h4 style={{color:"azure"}}   >SELECT BY LANGUAGE :</h4>
      <Form.Select aria-label="Default select example" style={{width:"150px"}}             onChange={(e) => setLangauge(e.target.value)}>  
      <option value="" ></option>
      {Lang.map(x=>
              <option value={x} >{x}</option>

        )}
    </Form.Select>
              </div>
              <div style={{marginTop:"90px"}}>
              <div class="mb-5">
                <h4 class="font-weight-bold mb-3" style={{color:"azure"}}  >BY GENRE :</h4>
                <div class="divider-small mb-3"></div>
                <div class="form-check pl-0 mb-2">
                  <input type="radio" class="form-check-input" id="materialGroupExample1" name="groupOfMaterialRadios"/>
                    <label class="form-check-label" for="materialGroupExample1"style={{color:"azure"}} >All</label>
                    </div>
                    <div class="form-check pl-0 mb-2">
                      <input type="radio" class="form-check-input" id="materialGroupExample2" name="groupOfMaterialRadios"/>
                        <label class="form-check-label" for="materialGroupExample2"style={{color:"azure"}} >Fantasy</label>
                        </div>
                        <div class="form-check pl-0 mb-2">
                          <input type="radio" class="form-check-input" id="materialGroupExample3" name="groupOfMaterialRadios"/>
                            <label class="form-check-label" for="materialGroupExample3"style={{color:"azure"}} >Science Fiction</label>
                            </div>
                            <div class="form-check pl-0 mb-2">
                              <input type="radio" class="form-check-input" id="materialGroupExample4" name="groupOfMaterialRadios"/>
                              <label class="form-check-label" for="materialGroupExample4"style={{color:"azure"}} >Horror</label>
                              </div>
                              <div class="form-check pl-0 mb-2">
                              <input type="radio" class="form-check-input" id="materialGroupExample4" name="groupOfMaterialRadios"/>
                              <label class="form-check-label" for="materialGroupExample4"style={{color:"azure"}} >Action &amp; Adventure</label>
                              </div>
                              <div class="form-check pl-0 mb-2">
                              <input type="radio" class="form-check-input" id="materialGroupExample4" name="groupOfMaterialRadios"/>
                              <label class="form-check-label" for="materialGroupExample4"style={{color:"azure"}} >Bios &amp; History</label>
                              </div>
                              <div class="form-check pl-0 mb-2">
                              <input type="radio" class="form-check-input" id="materialGroupExample4" name="groupOfMaterialRadios"/>
                              <label class="form-check-label" for="materialGroupExample4"style={{color:"azure"}} >Children's</label>
                              </div>
                              <div class="form-check pl-0 mb-2">
                              <input type="radio" class="form-check-input" id="materialGroupExample4" name="groupOfMaterialRadios"/>
                              <label class="form-check-label" for="materialGroupExample4"style={{color:"azure"}} >Literary Fiction</label>
                              </div>
                              <div class="form-check pl-0 mb-2">
                              <input type="radio" class="form-check-input" id="materialGroupExample4" name="groupOfMaterialRadios"/>
                              <label class="form-check-label" for="materialGroupExample4"style={{color:"azure"}} >Historical fiction</label>
                              </div>
                              <div class="form-check pl-0 mb-2">
                              <input type="radio" class="form-check-input" id="materialGroupExample4" name="groupOfMaterialRadios"/>
                              <label class="form-check-label" for="materialGroupExample4"style={{color:"azure"}} >Mystery &amp; Thriller</label>
                              </div>
                              <div class="form-check pl-0 mb-2">
                              <input type="radio" class="form-check-input" id="materialGroupExample4" name="groupOfMaterialRadios"/>
                              <label class="form-check-label" for="materialGroupExample4"style={{color:"azure"}} >Romance</label>
                              </div>
                              </div>
              </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>      </div>
      <div style={{marginLeft:"100px" , marginTop:"50px"}}>

   
      </div>
             </div>
            
             
             
             <>
             <div className="shopcontainer row" style={{marginLeft:"150px",marginTop:"10%"}}>
          
                  <BooksList Search={Search} Langauge={Langauge} Rating={Rating} keyword={keyword}/>
              
             </div>
            </>
    </>         
  );
};

export default LibraryB;
