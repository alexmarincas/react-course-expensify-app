import React from "react";
import { NavLink  } from "react-router-dom";

const Header = () =>(
    <header>
        <h1 className="logoTitle">Expensify</h1>
        <NavLink activeClassName="is-active" exact={true} to="/">Dashboard</NavLink>
        <NavLink activeClassName="is-active" exact={true} to="/create">Create Expense</NavLink>
        <NavLink activeClassName="is-active" exact={true} to="/help">Help</NavLink>
    </header>
);

export default Header;