import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-2">
            <div className="container">
                <span className="brand-logo left" ><Link to='/recruitmentapp'>Recruitment App</Link></span>

                <ul className="right">
                    <li><Link to="/recruitmentapp">Home</Link></li>
                    <li><NavLink to="/recruitmentapp/new-candidate">NEW CANDIDATE</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);