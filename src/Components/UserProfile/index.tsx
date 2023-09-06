import "./userprofile.css"

export type UserProfileProps = {
    name: string,
    email: string,
    url: string
}

export const UserProfile = ({ name, email, url }: UserProfileProps) => {
    return (
        <div className="user-profile-container">
            <div className="user-avatar">
                <img src={url} alt={`${name} image`} />
            </div>
            <div>
                <h5>{name}</h5>
                <p>{email}</p>
            </div>
        </div>
    )
}