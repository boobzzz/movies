import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as A from './redux/actions';
import { Field, useFormikContext } from 'formik';

import classes from './SignInInput.module.css';

const Input = ({ type, label, updateValues }) => {
    const { values } = useFormikContext()

    useEffect(() => {
        updateValues(values)
    }, [updateValues, values])

    return (
        <div className={classes.Input}>
            <label htmlFor={label}>{label}</label>
            <Field name={label}>
                {({ field, meta }) =>
                    <div>
                        <input
                            type={type}
                            id={label}
                            className={classes.Field}
                            autoComplete="off"
                            {...field} />
                        <div className={classes.ErrorMsg}>
                            {meta.error}
                        </div>
                    </div>
                }
            </Field>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateValues: (values) => dispatch(A.getValues(values)),
    }
}

export default connect(null, mapDispatchToProps)(Input);
