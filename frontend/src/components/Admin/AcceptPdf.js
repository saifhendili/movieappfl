import React from 'react'
import { useEffect, useState,Fragment } from "react";
import { listBook } from '../../Redux/Actions/BookActions'
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from 'react-bootstrap';
import BooksItem from './BooksItem';

function AcceptPdf() {

  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookList);
  const { loading, error, books } = bookList;

  useEffect(() => {
    dispatch(listBook());
  }, []);

  return (
  <Fragment>
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
  
  <div class="app-container">
  
      <div class="app-main" id="main">
      <div class="container-fluid">
 
         
          <div class="row">
              <div class="col-12">
                  <div class="card card-statistics clients-contant">
                      <div class="card-header">
                          <div class="d-xxs-flex justify-content-between align-items-center">
                              <div class="card-heading">
                                  <h4 class="card-title">Books</h4>
                              </div>
                             
                          </div>
                      </div>
                      <div class="card-body py-0 table-responsive">
                          <table class="table clients-contant-table mb-0">
                              <thead>
                                  <tr>
                                      <th scope="col">title</th>
                                      <th scope="col">language</th>
                           
                                      <th scope="col">Accept</th>
                                  </tr>
                              </thead>
                              <tbody>
                                {books.map((x)=>(<BooksItem  key={x._id} x={x} />))}
                                     
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
   
      </div>
    
      </div>  </div>  
   </Fragment>
        )}
      </Fragment>
    );
  };

export default AcceptPdf