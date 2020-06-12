import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import Pay from "./components/Pay";
import PayPalButton from "./components/PaypalButton";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomePage() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
  }, []);

  function handleDeleteUser(id) {
    dispatch(userActions.delete(id));
  }

  return (
    <Container style={{ marginLeft: "1rem", marginRight: "0" }}>
      <Row>
        <Col md={2}>
          <h1>Hi {user.firstName}!</h1>
        </Col>
        <Col></Col>
        <Col md={2} style={{ textAlign: "right" }}>
          <Link to="/login">Logout</Link>
        </Col>
      </Row>
      {/* 
            <h3>All registered users:</h3>
            {users.loading && <em>Loading users...</em>}
            {users.error && <span className="text-danger">ERROR: {users.error}</span>}
            {users.items &&
                <ul>
                    {users.items.map((user, index) =>
                        <li key={user.id}>
                            {user.firstName + ' ' + user.lastName}
                            {
                                user.deleting ? <em> - Deleting...</em>
                                : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                : <span> - <a onClick={() => handleDeleteUser(user.id)} className="text-primary">Delete</a></span>
                            }
                        </li>
                    )}
                t</ul>
            }*/}

      <Row></Row>
      <Row>
        {" "}
        <p>You're logged in with Labrise!!</p>{" "}
      </Row>
      <Row></Row>
      <Row>d</Row>
      <Row>
        <Col sm={2}>
          <Pay />
        </Col>
      </Row>
    </Container>
  );
}

export { HomePage };
