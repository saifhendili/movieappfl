import React from "react";
import { useEffect, useState,Fragment } from "react";
import { NavLink } from "react-router-dom";

import "./library.css";
import { listBook } from "../../Redux/Actions/BookActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

export const BooksList = (props) => {
  const { keyword } = props;
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookList);
  const { loading, error, books } = bookList;
  useEffect(() => {
    dispatch(listBook());
  }, []);

  return (
    <>
      <div
        className="shopcontainer row"
        style={{ marginLeft: "150px", marginTop: "10%" }}
      >
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant={"alert-danger"}>{error}</Message>
        ) : (
         <>
            {books.filter(el =>
                            el.title.toLowerCase().includes(props.Search.toLowerCase())).map((book) => (

                              book.state?props.Rating>=book.rating?props.Langauge==""?   <div className="shop col-lg-4 col-md-6 col-sm-6" key={book._id}>
                              <div className="border-product">
                                <NavLink  to={`/books?_id=${book._id}`}>
                                  <div className="shopBack">
                                    <img
                                     src={`books/${book.poster}`}
                                      alt={book.title}
                                      style={{ width: "200px", height: "250px" }}
                                    />
                                  </div>
                                </NavLink>
              
                                <div className="shoptext">
                                  <p>
                                    <NavLink
                                      to={`/books?_id=${book._id}`}
                                      style={{ textDecoration: "none", color: "black" }}
                                    >
                                      {book.title}
                                    </NavLink>
                                  </p>
                                </div>
                              </div>
                            </div>:props.Langauge==book.language?
              <div className="shop col-lg-4 col-md-6 col-sm-6" key={book._id}>
                <div className="border-product">
                  <NavLink  to={`/books?_id=${book._id}`}>
                    <div className="shopBack">
                      <img
                        src={`http://localhost:5000/books/${book.poster}`}
                        alt={book.title}
                        style={{ width: "200px", height: "250px" }}
                      />
                    </div>
                  </NavLink>

                  <div className="shoptext">
                    <p>
                      <NavLink
                        to={`/books?_id=${book._id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {book.title}
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>:null:null:null
            ))}
          </>
        )}
      </div>
    </>
  );
};
