import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={{ pathname: "/addcard" }}>
        <button>Add new card</button>
      </Link>
    </div>
  );
};

export default Home;
