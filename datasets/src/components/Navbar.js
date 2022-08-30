import React from 'react'
import '../App.css'
import ToggleSwitch from './ToggleSwitch'
function Navbar() {
    const user = JSON.parse(localStorage.getItem('currentUser'))
    function logout() {
        localStorage.removeItem('currentUser')
        window.location.href = '/'
    }
    

    return (
        <div>
             <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
             <div class="container-fluid ">
               <a class="navbar-brand" height="1" href="#"><img height="28" src='/images/cognida.png'></img></a>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
               {user ? (<>
                 <ul class="navbar-nav ">
                   <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="/upload">Upload</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="/lists">Lists</a>
                   </li>
                   <li class="nav-item">
                   <div class="dropdown navbar-right">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                    {user.name}
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item">{localStorage.tm}</a>
                                    <a class="dropdown-item" href="#" onClick={logout}>Logout</a>
                                    <ToggleSwitch />

                                </div>
                            </div>
                   </li>			
                 </ul></>):(<>
                 <ul className='navbar-nav'>
                 <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="/">Login</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="/register">Register</a>
                   </li>
                 </ul>
                 
                 
                 </>)}		  
               </div>
             </div>
           </nav>
        </div>
    )
}

export default Navbar 