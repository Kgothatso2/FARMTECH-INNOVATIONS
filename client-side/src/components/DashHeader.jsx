import React from 'react';
import '../styles/Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
      <header class="top">
        <Link to={"/"}>
          <h1>FARMTECH INNOVATIONS</h1>
        </Link>
      </header>
    );
}

export default Header
