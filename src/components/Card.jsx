import style from '../styles/card.module.css';
import PropTypes from 'prop-types';

const Card = ({img, name, title, email, animate, updateAnimate}) => {

    return (
        <div
          className={`${style["profile-card"]} ${
            animate ? style["is-entering"] : ""
          }`}
          onAnimationEnd={updateAnimate}
        >
          <div className={style["profile-card__image"]}>
            <img src={image_url} alt={name} />
          </div>
          <div className={style["profile-card__content"]}>
            <p>{name}</p>
            <p>{title}</p>
            <p>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
        </div>
      );
    

    {/*const [Text, setText] = useState("");
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setText(data[0].title));
        const [test, setTest] = useState("Hi");
        const handleOnClick = () => {
            setTest("Hello");
        };


    return (
        <div className={`${style["profile-card"]} ${animate ? style["is-entering"] : ""}`}
        onAnimationEnd={updateAnimate}
        > 
            <div className={style["profile-card__image"]}>
                <img src={img} alt={name} />
            </div>
            
            <div className={style["profile-card__content"]}>
                <p>{name}</p>
                <p>{text}</p>
                <p><a href={`mailto:${email}`}>{email}</a></p>
            </div>
        </div>
    ); */}
    
}
Card.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    email: PropTypes.string.isRequired
}
export default Card;