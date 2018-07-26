// Dependencies
import React,{Component} from 'react';
import { Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom';
// Internals
import './index.css';


class Navigation extends Component {
    render() {
      return (
        <nav className="navbar-type">
          <div >
            <ul>
              <li><NavLink activeClassName="selected" className="nav-link" exact to="/BMW">BMW</NavLink></li>
              <li><NavLink activeClassName="selected" className="nav-link" to="/Other Fishes">Other Cars</NavLink></li>
              <li><NavLink activeClassName="selected" className="nav-link" to="/Accessories">Accessory</NavLink></li>
            </ul>
          </div>
        </nav>
      )
    }
  }
  export default Navigation;