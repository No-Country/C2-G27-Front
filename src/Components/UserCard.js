import React from 'react'
import { FaUserCircle } from "react-icons/fa"
import { LinkContainer } from "react-router-bootstrap"
import { useSelector } from "react-redux"

function UserCard() {
    const { user: currentUser } = useSelector((state) => state.auth);

    return (
        <div className="userCard" >
            <FaUserCircle />
            <div className="userCard--text">
                <LinkContainer to="/profile">
                    <h5>{currentUser.user.username}</h5>
                </LinkContainer>
                <p>AdminUser</p>
            </div>
        </div>
    )

}

export default UserCard