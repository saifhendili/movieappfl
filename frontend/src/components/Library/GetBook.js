import React,{useEffect} from 'react'
import { listBookDetails } from '../../Redux/Actions/BookActions'
import { useSearchParams } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from 'react-bootstrap';

function GetBook() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const bookDetails = useSelector((state) => state.bookDetails);
  const { loading, books } =bookDetails ;
  useEffect(() => {
    dispatch(listBookDetails(searchParams.get("_id")));
  }, []);

  return loading || books === null ? (
    <Spinner />
  ) : (
<div className="shop col-lg-4 col-md-6 col-sm-6" key={books._id}>
                <div className="border-product">
                  <NavLink  to={`/books?_id=${books._id}`}>
                    <div className="shopBack">
                      <img
                        src={`books/${books.poster}`} 
                        alt={books.title}
                        style={{ width: "200px", height: "250px" }}
                      />
                    </div>
                  </NavLink>

                  <div className="shoptext">
                    <p>
                      <NavLink
                        to={`/books?_id=${books._id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {books.title}
                      </NavLink>
                    </p>
                  </div>
                </div>
                <div>
                <a href={`books/${books.pdf}`} download={"bookpdf.pdf"} >
                    <button className='btn btn-primary'>download</button>
                </a>
                </div>
                             <a  href={`books/${books.pdf}`} target="_blank"> <button className='btn btn-primary'>View</button></a>  

              </div>  )
}

export default GetBook