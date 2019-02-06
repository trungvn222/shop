import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { InputField, SelectField } from '../FormField';
import { required, email, confirmation } from 'redux-form-validators';


class RegisterForm extends Component {
    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props;
        const gender = [
            {
                value: '',
                label: 'Select gender',
                active: true,
            },
            {
                value: 'male',
                label: 'Male',
                active: false,
            },
            {
                value: 'female',
                label: 'Female',
                active: false,
            }
        ];
        const confirmPassword = confirmation({ field: 'password', fieldLabel: 'Password' });
        return (
            <form onSubmit={handleSubmit} className="form-horizontal" >
                <Field name="first-name" type="text" label="First Name" component={InputField} validate={[required()]} />
                <Field name="last-name" type="text" label="Last Name" component={InputField} validate={[required()]} />
                <Field name="username" type="text" label="Username" component={InputField} validate={[required()]} />
                <Field name="password" type="password" id="password" label="Password" component={InputField} validate={[required()]} />
                <Field name="password-confirm" type="password" id="password-confirm" label="Password Confirm" component={InputField} validate={[required(), confirmPassword]}/>
                <Field name="email" type="email" id="email" label="Email" component={InputField} validate={[email()]}/>
                <Field name="gender"  id="gender" label="Gender" component={SelectField} options={gender} validate={[required()]} />
                <button type="submit" disabled={submitting} className="btn btn-primary" value="submit">Submit</button>
                <button type="submit" disabled={submitting || pristine} className="btn btn-default" value="submit" onClick={reset}>Reset</button>
            </form>
        );
    }
}


export default reduxForm({
    form: 'fieldLevelValidation' // a unique identifier for this form
  })(RegisterForm)