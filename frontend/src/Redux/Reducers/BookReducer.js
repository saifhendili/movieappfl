import {
  BOOK_DETAILS_REQUEST,
  BOOK_DETAILS_SUCCESS,
  BOOK_DETAILS_FAIL,
    BOOK_LIST_FAIL,
    BOOK_LIST_REQUEST,
    BOOK_LIST_SUCCESS,
    DELETE_BOOK,BOOK_ERROR,ACCEPT_BOOK,GET_LANGUAGE,LANGAGUE_FAIL
  } from "../Constants/BookConstant.js";

// BOOK LIST
export const BookListReducer = (state = { books: [] }, action) => {
    switch (action.type) {
      case BOOK_LIST_REQUEST:
        return { loading: true, books: [] };
        case ACCEPT_BOOK:
          return { books: action.payload, loading: false };
      case BOOK_LIST_SUCCESS:
        return {
          loading: false,
          pages: action.payload.pages,
          page: action.payload.page,
          books: action.payload.books,
        };
      case BOOK_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  // SINGLE PRODUCT
  export const BookDETAILSReducer = (state = { books: {reviews:[]} }, action) => {
    switch (action.type) {
      case BOOK_DETAILS_REQUEST:
        return { ...state,loading: true};
      case BOOK_DETAILS_SUCCESS:
        return {
          loading: false,
          pages: action.payload.pages,
          page: action.payload.page,
          books: action.payload.book,
        };
      case BOOK_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const GetLanguage = (state = { Lang: [],loading:true }, action) => {
    switch (action.type) {
      case GET_LANGUAGE:
        return { 
          Lang: action.payload,
          loading: false};
   
      case LANGAGUE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
