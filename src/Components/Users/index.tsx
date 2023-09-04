import React, { useState, useEffect } from "react";
import "./users.css"
import { UserProfile, UserProfileProps } from "../UserProfile";

export const Users = () => {
    const [usersList, setUsersList] = useState<any>([
        { name: 'Test', email: 'test@gmail.com', avatarUrl: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png' }
    ])
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        avatarUrl: "",
    })

    const getUserInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserDetails({ ...userDetails, [event.target.name]: event.target.value })
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        let tempList: Array<any> = usersList
        tempList.push(userDetails)
        setUsersList(tempList)
        setUserDetails({
            name: "",
            email: "",
            avatarUrl: "",
        })
    }


    return (
        <>
            <form className="user-details-form" onSubmit={onSubmit}>
                <div className="user-details-input">
                    <label htmlFor="name">Username</label>
                    <input value={userDetails.name} id="name" type="text" name="name" onChange={getUserInfo} />
                </div>
                <div className="user-details-input">
                    <label htmlFor="email">Email</label>
                    <input value={userDetails.email} id="email" type="text" name="email" onChange={getUserInfo} />
                </div>
                <div className="user-details-input">
                    <label htmlFor="avatarUrl">Avatar</label>
                    <input value={userDetails.avatarUrl} id="avatarUrl" type="text" name="avatarUrl" onChange={getUserInfo} />
                </div>
                <input type="submit" value="Submit" />
            </form>
            {usersList && usersList.map((user: UserProfileProps, i: number) => {
                return (
                    <UserProfile name={user.name} email={user.email} avatarUrl={user.avatarUrl} key={i} />
                )
            })}

        </>
    )
}