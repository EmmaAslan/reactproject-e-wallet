import { Link } from "react-router-dom";

const AddCard = () => {
  return (
    <div>
      <p>Add card here</p>
      <Link to="/">
        <button>Return to homepage</button>
      </Link>
    </div>
  );
};

export default AddCard;
