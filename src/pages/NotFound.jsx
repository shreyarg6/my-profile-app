import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Wrapper>
      <h1>Error 404 Not Found</h1>
      <p style={{textAlign:"center"}}>Sorry, this page does not exist. Please try again!</p>
      <Link to="/" style={{textAlign:"center", display: "block"}}>Go back to Home</Link>
    </Wrapper>
  );
};

export default NotFound;