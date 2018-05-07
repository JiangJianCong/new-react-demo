import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Nav.css'

const NavBar = () => (
  <div>
    <div>
      <NavLink className = "blue" exact to='/'>PageA</NavLink> |&nbsp;
      <NavLink activeClassName="active" to='/PageB'>PageB</NavLink> |&nbsp;
      <NavLink activeClassName="active" to='/PageC/ILoveWeb'>PageC</NavLink>|&nbsp;
      <NavLink activeClassName="active" to='/PageE'>PageE</NavLink>|&nbsp;
      <NavLink  to='/aaaaa' activeClassName="active">PageD</NavLink>
    </div>
  </div>
);
export default NavBar;
