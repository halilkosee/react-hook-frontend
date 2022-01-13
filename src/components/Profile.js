import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import AuthService from "../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();


    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    WELLCOME <strong>{currentUser.username}</strong>
                </h3>
                <ListGroup horizontal>
                    <ListGroup.Item>{currentUser.id}</ListGroup.Item>
                    <ListGroup.Item>{currentUser.username}</ListGroup.Item>
                    <ListGroup.Item>{currentUser.email}</ListGroup.Item>
                    <ListGroup.Item>{currentUser.role}</ListGroup.Item>
                </ListGroup>
            </header>
        </div>
    );
};

export default Profile;
