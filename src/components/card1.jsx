import img from "../assets/profilePic1"
const Card1 = () => {
    const name = "jon"
    const title = "SE"
    const email = "jon.com"

    return(
        <div className = "profile-card">
            <div className = "profiel-card__image">
                <img src={img} alt="profile-pic"/>
            </div>

            <div className = "profiel-card__content">
                <p>{name}</p>
                <p>{title}</p>
                <p>{email}</p>
                <p><a href={'mailto:${email}'}>{email}</a></p>
            </div>

        </div>

    );
}
export default Card1;