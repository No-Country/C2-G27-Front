/* eslint-disable no-console, no-use-before-define */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
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

function LoginForm() {
  const history = useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Required'),
    password: Yup.string().required('Required'),
  });
  const formik = useFormik({
    initialValues,
    handleSubmit,
    validationSchema,
  });
  async function handleSubmit(event) {
    event.preventDefault();
    const loginData = {
      email: formik.values.email,
      password: formik.values.password,
    };
    await axios
      .post('BACKENDROUTE', loginData)
      .then((response) => {
        window.localStorage.setItem('token', response.data.token);
        history.push('/');
        console.log(window.localStorage.getItem('token'));
      })
      .catch((error) => {
        console.log('error', error);
      });
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
              <Link to='/'>
                <Button variant='primary' type='submit'>
                  Submit
                </Button>
              </Link>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default LoginForm;
