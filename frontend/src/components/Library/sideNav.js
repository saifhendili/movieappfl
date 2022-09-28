import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ReactStars from 'react-stars';
import libr from "../../data/Pictures/libr.jpeg";
import logo from "../../data/Pictures/logo.jpg";
import {  Form  } from "react-bootstrap";

function OffCanvasExample({ name ,ratingSearch, setRatingSearch , ...props}) {
  const [show, setShow] = useState(false);
  const [rating, setmyRating] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ratingChanged = (e) => {setRatingSearch(e)
  
    setmyRating(e.target.value)
  } ;
  
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2" style={{marginTop:"12%" , height:"300px",backgroundImage: `url(${logo})`, border:"azure",position:"fixed"
	
}}      >
        {name}
       <span style={{writingMode:"vertical-lr",textOrientation:"upright"}} >SEARCH HERE</span> 
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props} style={{backgroundImage: `url(${libr})`, width:"20%",marginTop:"5%"}}   >
        
        <Offcanvas.Body>
        <div className='rating-by-stars' style={{marginTop:'0px', width:'200px',height:"150px", display:'flex', flexDirection:' column', justifyContent:'center',padding:"5px"       }}>
                                                 <h4 style={{color:"azure"  }} ><i>SEARCH BY RATING :</i></h4>                                         
                                                 <ReactStars                                           
                                                     count={5}
                                                           onChange={e=>setmyRating(e.target.value)}
                                                           size={25}
                                                           isHalf={false}
                                                           emptyIcon={<i className="far fa-star"></i>}
                                                           halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                           fullIcon={<i className="fa fa-star"></i>}
                                                           activeColor="#ffd700"
                                                           value={ratingSearch}  
                                                           
                                                           
                                                  />  
                                           </div>                                    
     
     <div style={{marginTop:"10px"}}>
     <h4 style={{color:"azure"}}   >SELECT BY LANGUAGE :</h4>
      <Form.Select aria-label="Default select example" style={{width:"150px"}}   >
      <option disabled >SELECT</option>
      <option value="english" >ENGLISH</option>
      <option value="frensh">FRENCH</option>
      <option value="arabic">ARABIC</option>
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
    </>
  );
}
export default OffCanvasExample