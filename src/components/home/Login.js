import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link, withRouter } from 'react-router-dom';

import { auth } from '../../firebase';

const Login = ({ history }) => {
    
    const [msg, setMsg] = useState('');

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },validate,
        onSubmit: values => {
            console.log('hey');
            auth
                .signInWithEmailAndPassword(values.email, values.password)
                .then(res => {
                    setMsg('Logged In successfully!')
                    console.log('looo')
                }
                )
                .catch(err => {
                    setMsg(err.message)
                    console.log(err.message)
                })

            var user = auth.currentUser;
            user.updateProfile({
                displayName: 'Hello'
            })
                .then(() => console.log('done'))
                .catch(err => console.log(err))
        }
    });

    return (
        <div className='form-container vh-100 vw-100 d-flex flex-column justify-content-center align-items-center'>
            {msg ? <div className='text-success text-dark text-wrap w-20px'>{msg}</div> : null}
            <div className='form-box d-flex flex-column px-5 justify-content-around'>
                <div className='text-center text-header py-3'>
                    <h1>Login</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={formik.handleSubmit} className='mx-auto'>
                        <div className='form-group'>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                placeholder='Email'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                className='form-control form-control-sm' />
                            {formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                        </div>
                        <div className='form-group'>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder='Password'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                className='form-control form-control-sm' />
                            {formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                        </div>
                        <button type='submit' className='btns'>Sign In</button>
                        <Link to='/' className="pull-right">Already have an account?</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if(!values.password)
        errors.password = 'Required';
  
    return errors;
  };