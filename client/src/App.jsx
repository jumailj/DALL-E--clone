import React from 'react'
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom';
import {logo} from './assets';

import {Home, CreatePost, LoginPage} from './pages';



const App=()=>{
  return(
    <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">

      {/* webpage-logo [openai] */}
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>

      {/*Create button */}
      <div className=" flex justify-between gap-5">
      <Link to="/login-page" className="font-inter font-medium bg-[#b84712] text-white px-4 py-2 rounded-md">Login</Link>
      <Link to="/create-post" className="font-inter font-medium bg-[#12b886] text-white px-4 py-2 rounded-md">Create</Link>
      </div>
      
    </header>


    {/*rest of the area for homepage and image creation*/}
    <main className="sm:p-8 px-4 py-8 w-full bg-[#dff0ea] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} /> {/*home page*/}
        <Route path="/create-post" element={<CreatePost />} />  {/* image generating page*/}
        <Route path="/login-page" element={<LoginPage />} />  {/* image generating page*/}
      </Routes>
    </main>
    </BrowserRouter>
 
  );
}
export default App