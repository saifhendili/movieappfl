import React, { Fragment, useState } from 'react';

import { Link, Navigate } from 'react-router-dom';


import { useDispatch, useSelector } from "react-redux";
import { register } from '../../Redux/Actions/auth';

function Register(props) {
  const [fromData, setFormData] = useState({
    name:'',
    email: '',
    password: '',
  });
  const {
    name,
    email,
    password,
   
  } = fromData;
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } =auth ;

  const hundelchange = (e) =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });
  const onsubmit = (e) => {
    e.preventDefault();
    dispatch(register({
        name,
        email,
        password,
      }));
    
  };
  if (isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }
  return (
    

        <div class="app-content">

   

                                    <h1 class="section__heading u-c-secondary">CREATE AN ACCOUNT</h1>
           
       
                <div class="section__content">
                    <div class="container">
                        <div class="row row--center">
                            <div class="col-lg-6 col-md-8 u-s-m-b-30">
                                <div class="l-f-o">
                                    <div class="l-f-o__pad-box">
                                        <h1 class="gl-h1">PERSONAL INFORMATION</h1>
                                        <form  onSubmit={(e) => onsubmit(e)} class="l-f-o__form">
                                         
                                            <div class="u-s-m-b-30">

                                                <label class="gl-label" for="reg-fname">NAME *</label>

                                                <input class="input-text input-text--primary-style" type="text" id="reg-fname" placeholder="First Name"
                                                 name='name'
                                                 value={name}
                                                 onChange={(e) => hundelchange(e)}
                                                 /></div>

 
                                            <div class="u-s-m-b-30">

                                                <label class="gl-label" for="reg-email">E-MAIL *</label>

                                                <input class="input-text input-text--primary-style"  id="reg-email" placeholder="Enter E-mail"
                                                  type='email'
                                                  
                                                  name='email'
                                                  value={email}
                                                  onChange={(e) => hundelchange(e)}
                                                  /></div>
                                            <div class="u-s-m-b-30">

                                                <label class="gl-label" for="reg-password">PASSWORD *</label>

                                                <input class="input-text input-text--primary-style" id="reg-password" placeholder="Enter Password" 
                                                 type='password'
                                                
                                                 name='password'
                                                 value={password}
                                                 minLength='6'
                                                 onChange={(e) => hundelchange(e)}
                                                 /></div>
                                               
                    
                                          

                                            <div class="u-s-m-b-15">

                                                <button class="btn btn--e-transparent-brand-b-2" type="submit">CREATE</button></div>

                                            <a class="gl-link" href="#">Return to Store</a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

     
  );
}

export default Register