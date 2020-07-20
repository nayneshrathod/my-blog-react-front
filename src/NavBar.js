import React from 'react';
import {Link} from 'react-router-dom';
const NavBar = () =>(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/" >My Blog</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link class="nav-item nav-link" to = "/" activeClassName="active">Home<span class="sr-only">(current)</span></Link>
                <Link class="nav-item nav-link" to = "/about" activeClassName="active"> About</Link>
                <Link class="nav-item nav-link" to = "/articles-list" activeClassName="active">Articles </Link>
            </div>
        </div>
    </nav> 
);
export default NavBar;

