import AddNewCard from "../components/AddNewCard";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddCard = () => {
  const [newCard, setNewCard] = useState(false);

  return (
    <div>
      {newCard ? (
        <h1>Wiho, you have a new card. Let's start shopping! :)</h1>
      ) : (
        <AddNewCard setNewCard={setNewCard} />
      )}
      <Link to="/">
        <button className="activeBtn">Return to wallet</button>
      </Link>
    </div>
  );
};

export default AddCard;
