import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="nav">
            <h1 className="name">AJKER BAJAR</h1>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/order">Order</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/Deals">Deals</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default Header;