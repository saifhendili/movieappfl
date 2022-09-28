import { Route, Routes }from "react-router-dom";
import React, { useEffect } from 'react';

import './App.css';
import LibraryB from "./components/Library/LibraryB";
import  BookScreen  from "./screens/BookScreen";
import HomeScreen from './screens/HomeScreen';
import setAuthToken from './Redux/utils/setAuthToken';
import { loadUser } from './Redux/Actions/auth';
import store from './Redux/Store';
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./components/routing/PrivateRoute";
import Dashboard from "./components/dashborad/Dashboard";
import Alert from "./components/Layout/Alert";
import Navbar from "./components/Layout/Navbar";
import Addbook from "./components/Library/Addbook";
import GetBook from "./components/Library/GetBook";


if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <div >
          <Alert className='aaa' />
          <Navbar/>

    <Routes>
   <Route  path="/" element={<HomeScreen/> } />
<Route exact path='/register' element={<Register/>} />
<Route exact path='/login' element={<Login/>} />
<Route path="/search/:keyword" element={<LibraryB   />}  exact />
<Route path="/library" element={<LibraryB/>} exact/>
<Route path="/books/:id" element={<BookScreen/>}  exact/>
<Route  path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>} />
<Route  path='/Addbook' element={<PrivateRoute><Addbook/></PrivateRoute>} />
<Route  path='/books' element={<PrivateRoute><GetBook/></PrivateRoute>} />
</Routes>

</div>
  );
}
export default App;