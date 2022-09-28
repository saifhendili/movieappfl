import React from 'react'
import { useEffect, useState,Fragment } from "react";
import { Acceptbook } from '../../Redux/Actions/BookActions';
import { useDispatch, useSelector } from "react-redux";

function BooksItem({key,x:{_id,title,author,language,state}}) {
    const dispatch = useDispatch();
    const onsubmit = (e) => {
        e.preventDefault();
        dispatch(Acceptbook(_id)) 
       };

  return (
    state==false?
    <tr>
    <td>
        <div class="d-flex align-items-center">
          
            <p class="font-weight-bold">{title} </p>
        </div>
    </td>
    <td>{author}</td>
    <td><a class="dot"></a><span>{language}</span></td>

  
    <td>
       <div onClick={e=>onsubmit(e)} class="btn btn-primary"> Accept</div>
    
    </td>
    </tr>:null  )
}

export default BooksItem