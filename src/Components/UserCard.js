import React from 'react'
import { FaUserCircle } from "react-icons/fa"
import { LinkContainer } from "react-router-bootstrap"

function UserCard() {
    return (
        <div className="userCard" >
            <FaUserCircle />
            <div className="userCard--text">
                <LinkContainer to="/profile">
                    <h5>Martin Paz</h5>
                </LinkContainer>
                <p>AdminUser</p>
            </div>
        </div>
    )

}

export default UserCard