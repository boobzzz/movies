import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import * as A from './redux/actions';
import * as S from './redux/selectors';
import * as C from '../../../utils/api/constants';

import Input from '../Input/SignInInput';
import classes from './SignInForm.module.css';

const initialValues = {
    username: 'boooble',
    password: 'aid261282'
}
const validationSchema = Yup.object({
    username: Yup.string()
        .required('Login field is required'),
    password: Yup.string()
        .required('Password field is required')
})

const api = {
    key: C.API_KEY_V3,
    endpoint: C.API_ENDPOINT,
    reqToken: C.REQUEST_TOKEN,
    validToken: C.VALIDATE_TOKEN,
    session: C.NEW_SESSION
}

const SignInForm = (props) => {
    const { values, submit } = props
    const options = {
        method: 'POST',
        body: values
    }

    const handleSubmit = () => submit(api, options)

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {({ isValid, isSubmitting }) => {
                return (
                    <Form className={classes.Form}>
                        <Input type="text" label="username" />
                        <Input type="password" label="password" />
                        <button type="submit" disabled={!isValid || isSubmitting}>
                            sign in
                        </button>
                    </Form>
                )
            }}
        </Formik>
    )
}

const mapStateToProps = (state) => {
    return {
        values: S.getValues(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (api, options) => dispatch(A.getLogin(api, options))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
