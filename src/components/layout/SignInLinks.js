import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authAction'

const SignInLinks = (props) => {
    const {initial} = props.profile;

    return (
        <ul className="right">
            <li><NavLink to='/create' >New Project</NavLink></li>
            <li><a href='/' onClick={props.signOut} >Log Out</a></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">{ initial }</NavLink></li>
        </ul>
    )
}

const mapStateToProps = (state)=>{
    return {
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        signOut: ()=> dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInLinks)
