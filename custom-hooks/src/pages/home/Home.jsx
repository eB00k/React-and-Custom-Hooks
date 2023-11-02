import { Link } from "react-router-dom";
import { navLinks } from "../../constants/constants";

const Home = () => {
  return (
    <div>
      <h1>List of Custom Hooks</h1>
      <br />
      <ul>
        {navLinks.map((navLinks) => (
          <Link to={`/${navLinks.label}`}>
            <li>{navLinks.label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
