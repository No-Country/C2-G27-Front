/* eslint-disable react/function-component-definition, react/no-array-index-key */
import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Container } from "reactstrap";

const UserPage = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Container>
        <h3>
          <strong>{currentUser.username}</strong> Wallet!
        </h3>

      <p>
        <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
        {currentUser.token.substr(currentUser.token.length - 20)}
      </p>
      <p>
        <strong>username:</strong> {currentUser.user.username}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>

    </Container>



  );
};

export default UserPage;

