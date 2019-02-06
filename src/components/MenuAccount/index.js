import React, { PureComponent } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { ACCOUNT_URI, SIGN_IN_URI, REGISTER_URI } from '../../const/route';
import { logout, isLoggedIn } from '../../helpers/user';
import './style.css';

class MenuAccount extends PureComponent {
    logOut = (e) => {
        e.preventDefault();
        logout();

        if(isLoggedIn()){
            return <isLoggedIn to="/" />
        }
    }
    render() {
        const { user = null } = this.props;
        return (
            <React.Fragment>
                <Link to={ACCOUNT_URI}>
                    { user === null ? 'My Account' : user.username  }
                    <i className="fa fa-angle-down" />
                </Link>
                {
                    user === null ? <ul className="account_selection">
                        <li><Link to={SIGN_IN_URI}><i className="fa fa-sign-in" aria-hidden="true" />Sign In</Link></li>
                        <li><Link to={REGISTER_URI}><i className="fa fa-user-plus" aria-hidden="true" />Register</Link></li>
                    </ul> : <ul className="account_selection"> <li><a onClick={e => this.logOut(e)} href="#logout"><i className="fa fa-user-plus" aria-hidden="true" />Logout</a></li></ul> 
                }
                
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user
});
const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(MenuAccount);