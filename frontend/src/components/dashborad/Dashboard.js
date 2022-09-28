import React, { Fragment } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import AcceptPdf from '../Admin/AcceptPdf';
import LibraryB from '../Library/LibraryB';

function Dashboard() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated, loading, user } =auth ;

  return (
loading||user==null?<Spinner/>:<Fragment>
  {!user.isAdmin?<LibraryB/>:<AcceptPdf/>

}
</Fragment>  )
}

export default Dashboard