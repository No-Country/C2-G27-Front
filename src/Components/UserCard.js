import React from 'react'
import { FaUserCircle } from "react-icons/fa"

function UserCard() {
    return (
        <div className="userCard" >
            <FaUserCircle />
            <div className="userCard--text">
                <h5>Martin Paz</h5>
                <p>AdminUser</p>
            </div>
        </div>
    )

}

export default UserCard
