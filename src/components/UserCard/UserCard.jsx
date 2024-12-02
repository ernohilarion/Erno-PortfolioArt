import React, { useEffect, useState } from 'react';
import { Card, ListGroup, Spinner, Row, Col, Container } from 'react-bootstrap';
import userServices from '../../services/user.services';
import './UserCard.css';

const UserCard = ({ userData }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (userData?._id) {
            loadUserInfo(userData._id);
        } else {
            setIsLoading(false);
        }
    }, [userData]);

    const loadUserInfo = (userId) => {
        userServices
            .getOneUsers(userId)
            .then(({ data }) => {
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
    };

    return (
        <div className="UserCard">
            {isLoading ? (
                <Spinner animation="border" size="sm" />
            ) : (
                <div className="user-card border-0">
                    <Row className="align-items-center">
                        <Col md={12}>
                            <h2>{userData?.username} {userData?.artist}</h2>
                            <h2>{userData?.country}</h2>
                            <h2>{userData?.year}</h2>
                            <h5>Bio: {userData?.userbio}</h5>
                        </Col>
                        <Col md={12} className="text-right">
                            <img src={userData?.userimage} alt="User Image" className="img-fluid rounded" />
                        </Col>
                    </Row>
                </div>
            )}
        </div>
    );


};

export default UserCard;


