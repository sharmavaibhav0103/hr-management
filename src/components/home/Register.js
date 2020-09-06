import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

import { auth } from '../../firebase';

const Register = () => {
    const [msg, setMsg] = useState('');

    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: '',
        },validate,
        onSubmit: values => {
            auth
                .createUserWithEmailAndPassword(values.email, values.password)
                .then(
                    user => {
                        console.log('yes');
                        setMsg('Account Created Successfully');
                    }
                )
                .catch(err => setMsg(err.message))
        }
    });

    return (
        <div className='form-container vh-100 flex-column vw-100 d-flex justify-content-center align-items-center'>
            {msg ? <div className='text-success text-wrap'>{msg}</div> : null}
            <div className='form-box d-flex flex-column px-5 justify-content-around'>
                <div className='text-center text-header py-3'>
                    <h1>Register</h1>
                </div>
                <div className="flex-grow-1 pt-5">
                    <form onSubmit={formik.handleSubmit}>
                        <div className='form-group'>
                            <input
                                id="userName"
                                name="userName"
                                type="text"
                                placeholder="Username"
                                onChange={formik.handleChange}
                                value={formik.values.userName}
                                className='input-box' />
                            {formik.errors.userName ? <div className="text-danger">{formik.errors.userName}</div> : null}
                        </div>
                        <div className='form-group'>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                placeholder='email'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                className='input-box' />
                            {formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                        </div>
                        <div className='form-group'>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder='password'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                className='input-box' />
                            {formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                        </div>
                        <button type='submit' className='btns'>Sign Up</button>
                        <Link to='/login' className='justify-self-center'>Don't have an account?</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register;
const validate = values => {
    const errors = {};
    if (!values.userName) {
      errors.userName = 'Required';
    } else if (values.userName.length > 15) {
      errors.userName = 'Must be 15 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if(!values.password)
        errors.password = 'Required';
  
    return errors;
  };