import React from 'react';
import {Field, reduxForm} from 'redux-form';


class StreamForm extends React.Component{

    renderError = ({error, touched}) => {
        if (error && touched) {
            return (
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            );
        }
    }


    renderInput = ({input, label, meta}) => {
        return (
            <div>
                <label>{label}</label>
                <input {...input} autoComplete='off' />
                <div>{this.renderError(meta)}</div>
            </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    render () {
        return (
            <form
                className='ui form error'
                onSubmit = {this.props.handleSubmit(this.onSubmit)}    
            >
                <Field name='title' component={this.renderInput} label='Enter Title' />
                <Field name='description' component={this.renderInput} label='Enter Description' />
                <button
                    type='submit' 
                    className='ui button primary'    
                >
                   submit 
                </button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.title) {
        errors.title = 'You Must Enter A Title!'
    }
    if(!formValues.description) {
        errors.description = 'You Must Enter A Description!'
    }
    return errors;
};

export default reduxForm({
    form: 'StreamForm', validate
})(StreamForm);
