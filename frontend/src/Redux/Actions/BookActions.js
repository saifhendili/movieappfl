import {GET_LANGUAGE,LANGAGUE_FAIL,ACCEPT_BOOK , DELETE_BOOK,BOOK_ERROR,BOOK_DETAILS_FAIL, BOOK_DETAILS_REQUEST, BOOK_DETAILS_SUCCESS, BOOK_LIST_FAIL, BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS } from "../Constants/BookConstant.js";
import axios from "axios";
import { SetAlert } from './alert';

export const addBook = (formData) => async (dispatch) => {
  const config = {
    headers: { 'content-type': 'multipart/form-data' }

  };
  try {
   await axios.post(
      `/api/books/`,
      formData,
      config
    );

  

    dispatch(SetAlert('Book Added', 'success'));
  } catch (err) {
    dispatch({
      type: BOOK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};


export const Acceptbook = (id) => async (dispatch) => {
  try {
    console.log("1")

    const res = await axios.put(`/api/books/accept/${id}`);
console.log("2")
    dispatch({
      type: ACCEPT_BOOK,
      payload: res.data,
    });
    dispatch(SetAlert('Book Accepted', 'success'));

  } catch (err) {
    dispatch({
      type: BOOK_LIST_FAIL,
    });
  }
};



export const listBook = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/books`);

    dispatch({
      type: BOOK_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BOOK_LIST_FAIL,
    });
  }
};

export const GetLangague = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/books/language`);

    dispatch({
      type: GET_LANGUAGE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LANGAGUE_FAIL,
    });
  }
};


export const listBookDetails = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/books/${id}`);

    dispatch({
      type: BOOK_DETAILS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BOOK_DETAILS_FAIL,
    });
  }
};


export const deleteBook = (id) => async (dispatch) => {
  try {
    await axios.delete( `/api/books/${id}`);

    dispatch({
      type: DELETE_BOOK,
      payload: id,
    });

    dispatch(SetAlert('Book Removed', 'success'));
  } catch (err) {
    dispatch({
      type: BOOK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};



// // BOOK LIST
// export const listBook =
//   (keyword="")=>
//   async (dispatch) => {
//     try {
//       dispatch({ type: BOOK_LIST_REQUEST });
//       const { data } = await axios.get(
//        `/api/books?keyword=${keyword}`
//       );
//       dispatch({type:BOOK_LIST_SUCCESS,payload:data})
     
//     } catch (error) {
//       dispatch({
//         type: BOOK_LIST_FAIL,
//         payload:
//           error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message,
//       });
//     }
//   };


// // Single book

// export const listBookDetails =
//   (id)=>
//   async (dispatch) => {
//     try {
//       dispatch({ type: BOOK_DETAILS_REQUEST });
//       const { data } = await axios.get(
//        `/api/books/${id}`
//     ); 
//       dispatch({type:BOOK_DETAILS_SUCCESS,payload:data})
     
//     } catch (error) {
//       dispatch({
//         type: BOOK_DETAILS_FAIL,
//         payload:
//           error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message,
//       });
//     }
//   };