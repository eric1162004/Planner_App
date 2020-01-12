import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import {connect} from 'react-redux'
import {AuthIsLoaded} from '../../hoc/auth/authIsLoaded'

const Navbar = (props) => {
    const {auth}=props;

    const links = auth.uid ? <SignInLinks/> : <SignOutLinks/>;

    return (
        <nav className="nav-wrapper grey darken-4 z-depth-1">
            <div className="container">
                <Link to='/' className="brand-logo left">Planner</Link>
                
                <AuthIsLoaded>
                    {links}
                </AuthIsLoaded>

            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)
