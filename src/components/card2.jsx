import img from "../assets/profilePic2.webp"
import "../styles/cards.css"

const Card2 = () => {
    const name = "jane"
    const title = "SE"
    const email = "jane.com"

    return (
        <div className="profile-card">
            <div className="profile-card__image">
                <img src={img} alt={name} />
            </div>
            <div className="profile-card__content">
                <p>{name}</p>
                <p>{title}</p>
                <p><a href={`mailto:${email}`}>{email}</a></p>
            </div>
        </div>
    );
}
export default Card2;