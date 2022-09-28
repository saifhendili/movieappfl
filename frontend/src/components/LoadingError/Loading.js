import React from "react"
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <div className="d-flex justify-content-center" >
      <Spinner animation="grow" style={{color:"rgb(218,165,32)"}} />
    </div>
  );
};

export default Loading;
