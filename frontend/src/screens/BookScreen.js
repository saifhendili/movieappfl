import React, { useEffect, useState } from 'react'
import Loading from '../../src/components/LoadingError/Loading';
import Message from '../../src/components/LoadingError/Error';
import { useDispatch ,useSelector} from 'react-redux';
import { Link, useParams} from 'react-router-dom';

import { listBookDetails } from '../Redux/Actions/BookActions';
import books from "../data/Data.js";



 const BookScreen = ({match}) => {
  
  const { _id } = useParams();
  const book = books.find((p) => String(p._id) === _id);
    
  const dispatch=useDispatch();
  const bookDetails = useSelector((state) => state.bookDetails);
  const { loading, error } = bookDetails;

  useEffect(()=>{
    dispatch(listBookDetails());
  }, [dispatch]
  )
  
  
  
  
  
  return (
    <>
     
      <div className="container single-product">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                  <img src={book.poster} alt={book.title} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">{book.title}</div>
                  </div>
                 

                
                </div>
              </div>
            </div>

          
          </>
        )}
      </div>
    </>
  )
}
export default BookScreen;