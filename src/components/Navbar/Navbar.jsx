import React , {Component} from 'react';
import './Navbar.css';
import { MenuItems } from '../MenuItems/MenuItems';
import {  NavLink , Link } from 'react-router-dom';

class Navbar extends Component {
  state = {clicked: false};
  handleClick = () => {
    this.setState({clicked : !this.state.clicked})
  }
  render() {
    return (
    <nav className="NavbarItems">
      <NavLink to="/">
      <h1 className="NavbarLogo">Expedition<span className='red'>Xplorer</span></h1>

      </NavLink>
      <div className="MenuIcons" onClick={this.handleClick}>
        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars" }></i>
      </div>
 
      <ul className={this.state.clicked ? "NavMenu active" :"NavMenu" }>
        {MenuItems.map((item , index) => {
          return (
            <li key={index}>
              <Link to={item.url} className={item.cName}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          )
        })}
        <button>Sign up</button>
      </ul>
    </nav>
  )
  }
}

export default Navbar
