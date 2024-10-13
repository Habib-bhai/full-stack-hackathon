import React from 'react';
import navbar from "../Pages/Navbar";

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-yellow-500">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <Navbar />


            </div>
        </nav>
        

    </div>
    
  )
}

export default Navbar;