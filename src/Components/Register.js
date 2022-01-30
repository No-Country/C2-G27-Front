/* eslint-disable no-console, react/function-component-definition, jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Col, Row, CardBody, Card } from 'reactstrap';
import { register } from '../Features/auth';
import { clearMessage } from '../Features/message';

const Register = () => {
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const { user: currentUser } = useSelector((state) => state.auth);
  const adminID = currentUser.user.peopleId;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        'len',
        'The username must be between 3 and 20 characters.',
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required('This field is required!'),
    email: Yup.string()
      .email('This is not a valid email.')
      .required('This field is required!'),
    password: Yup.string()
      .test(
        'len',
        'The password must be between 6 and 40 characters.',
        (val) =>
          val && val.toString().length >= 6 && val.toString().length <= 40
      )
      .required('This field is required!'),
  });

  const handleRegister = (formValue) => {
    const { username, email, password } = formValue;

    setSuccessful(false);

    dispatch(register({ username, email, password, adminID }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  return (
    <Container className='vh-100 vw-100 d-flex align-items-center justify-content-center'>
      <Row>
        <Col>
          <Card className='registration'>
            <CardBody>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleRegister}
              >
                <Form>
                  {!successful && (
                    <div>
                      <div className='form-group'>
                        <label htmlFor='username'>Username</label>
                        <Field
                          name='username'
                          type='text'
                          className='form-control'
                        />
                        <ErrorMessage
                          name='username'
                          component='div'
                          className='alert alert-danger'
                        />
                      </div>

                      <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <Field
                          name='email'
                          type='email'
                          className='form-control'
                        />
                        <ErrorMessage
                          name='email'
                          component='div'
                          className='alert alert-danger'
                        />
                      </div>

                      <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <Field
                          name='password'
                          type='password'
                          className='form-control'
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
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                  )}
                </Form>
              </Formik>
            </CardBody>
            {message && (
              <div className='form-group'>
                <div
                  className={
                    successful ? 'alert alert-success' : 'alert alert-danger'
                  }
                  role='alert'
                >
                  {message}
                </div>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
