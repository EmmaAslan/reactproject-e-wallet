import { Link } from "react-router-dom";
import Wallet from "../components/Wallet";

const Home = () => {
  return (
    <div>
      <Link to={{ pathname: "/addcard" }}>
        <button>Add new card</button>
      </Link>
      <h2>Active card</h2>
      <Wallet />
    </div>
  );
};

export default Home;
