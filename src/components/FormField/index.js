import React from 'react';

const Error = (props) => {
    const {touched, error} = props.meta;
    return touched && error ? <span className="label label-danger">{error}</span> : null;
    
}

export const InputField = (props) => {
    const {input, label, type, meta} = props;
    return (
        <div className="form-group">
            <label>{label}</label>
            <input {...input} placeholder={label} type={type} className="form-control" />
            <Error meta={meta} />
        </div>
    )
}

export const SelectField = (props) => {
    const {input, label, meta, options = []} = props;

    return <div className="form-group">
        <label>{label}</label>
        <select {...input} className="form-control">
            {
                options.map( (v, i) => {
                    return (<option key={i} value={v.value}>{v.label}</option>);
                })
            }
        </select>
        <Error meta={meta} />
    </div>
}

export const TextAreaField = (props) => {
    const {input, label, meta} = props;
    return <div className="form-group">
        <label>{label}</label>
        <textarea {...input} placeholder={label} className="form-control" />
        <Error meta={meta} />
    </div>
}