import AddNewCard from "../components/AddNewCard";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddCard = () => {
  const [newCard, setNewCard] = useState(false);

  return (
    <div>
      {newCard ? (
        <h1>Your card has been added to your wallet!</h1>
      ) : (
        <AddNewCard setNewCard={setNewCard} />
      )}
      <Link to="/home">
        {" "}
        <button id="walletBtn">Go to wallet</button>
      </Link>
    </div>
  );
};

export default AddCard;
