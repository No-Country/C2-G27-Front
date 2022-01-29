/* eslint-disable no-console, no-use-before-define, no-undef,  react/prop-types, jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { login } from '../Features/auth';
import { clearMessage } from '../Features/message';

function LoginForm() {
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const history = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: '',
    password: '',
  };
  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = (formValue) => {
    const { username, password } = formValue;
    setLoading(true);
    console.log('clicked');
    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        history.push('/');
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to='/' />;
  }

  return (
    <div className='col-md-12 login-form'>
      <div className='card card-container p-3'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className='form-group'>
              <label htmlFor='username' controloid='username'>
                Username
              </label>
              <Field
                name='username'
                type='text'
                className='form-control'
                controlid='username'
              />
              <ErrorMessage
                name='username'
                component='div'
                className='alert alert-danger'
              />
            </div>

            <div className='form-group mt-2'>
              <label htmlFor='password' controlid='password'>
                Password
              </label>
              <Field
                name='password'
                type='password'
                className='form-control'
                controlid='password'
              />
              <ErrorMessage
                name='password'
                component='div'
                className='alert alert-danger'
              />
            </div>

            <div className='form-group'>
              <button
                type='submit'
                className='btn btn-primary btn-block mt-2'
                disabled={loading}
              >
                {loading && (
                  <span className='spinner-border spinner-border-sm' />
                )}
                <span>Login</span>
              </button>
            </div>
          </Form>
        </Formik>
      </div>

      {message && (
        <div className='form-group'>
          <div className='alert alert-danger' role='alert'>
            {message}
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
