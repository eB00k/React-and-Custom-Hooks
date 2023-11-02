import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>List of Custom Hooks</h1>
      <br />
      <ul>
        <Link to={"/useOnlineStatus"}>
          <li>useOnlineStatus</li>
        </Link>
      </ul>
    </div>
  );
};

export default Home;
