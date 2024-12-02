

import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth.context'
import userServices from '../../services/user.services'
import './CollectionsList.css'
import { Link } from 'react-router-dom';

function CollectionsList() {
    const { user } = useContext(AuthContext)
    const [usersData, setUsersData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadAllUsers = async () => {
            try {
                const response = await userServices.getAllUsers()
                setUsersData(response.data)
            } catch (err) {
                console.error(err)
            } finally {
                setIsLoading(false)
            }
        }

        loadAllUsers()
    }, [user])

    return (
        <div className="collectionsListContainer">
            <div className="collectionsList">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="project-container">
                        {usersData.map((user) => (
                            <Link
                                key={user._id}
                                to={`/collections/${user._id}`}
                                className="project"
                            >
                                <div className="gallery">
                                    <img
                                        src={user.backgrdimage}
                                        alt={`${user.username} Project`}
                                    />
                                    <div className="newstext">
                                        <p>{user.username}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default CollectionsList