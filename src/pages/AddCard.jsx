import { Link } from "react-router-dom";
import AddNewCard from "../components/AddNewCard";

const AddCard = () => {
  return (
    <div>
      <AddNewCard />
      <Link to="/">
        <button>Return to homepage</button>
      </Link>
    </div>
  );
};

export default AddCard;
