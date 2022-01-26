/* eslint-disable no-console, no-use-before-define */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Form,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Input,
  Label,
  FormText,
} from 'reactstrap';

import { login } from '../Features/auth';
import { message } from '../Features/message';

function LoginForm() {
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues,
    handleSubmit,
    validationSchema,
  });

  const handleSubmit = (formValue) => {
    const { email, password } = formValue;
    setLoading(true);

    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        props.history.push('/');
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Redirect to='/' />;
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className='m-0'>Log In</CardTitle>
        </CardHeader>
        <CardBody>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <FormGroup className='mb-2' controlId='email'>
              <Label>Email address</Label>
              <Input
                type='email'
                placeholder='Enter email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                id='email'
              />
              <FormText className='text-muted'>
                {formik.errors.email && formik.touched.email ? (
                  <div>{formik.errors.email}</div>
                ) : (
                  "We'll never share your email with anyone else."
                )}
              </FormText>
            </FormGroup>
            <FormGroup className='mb-3' controlId='password'>
              <Label>Password</Label>
              <Input
                type='password'
                placeholder='Password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                id='password'
              />
              <FormText className='text-muted'>
                {formik.errors.password && formik.touched.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
              </FormText>
            </FormGroup>
            <div className='d-flex flex-row-reverse'>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default LoginForm;
