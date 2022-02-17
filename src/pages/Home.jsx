import { Link } from "react-router-dom";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <Link to={{ pathname: "/addcard" }}>
        <button>Add new card</button>
      </Link>

      <Card />
    </div>
  );
};

export default Home;
