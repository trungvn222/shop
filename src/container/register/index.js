import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

import RegisterForm from '../../components/RegisterForm';
import { isLoggedIn } from '../../helpers/user';
import { register } from '../../actions/users';
import { SHOP_URI } from '../../const/route';

import './style.scss';

class Register extends PureComponent {
    onSubmitHandle = (value) => {
        const {dispatch} = this.props;
        dispatch(register(value));
    }
    render() {

        if(isLoggedIn()){
            return <Redirect to={SHOP_URI} />
        }

        return (
            <div className="container page-register">
                <div className="row">
                    <div className="col-sm-12">
                        <RegisterForm onSubmit={this.onSubmitHandle}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(Register);