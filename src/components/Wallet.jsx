import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeActive, deleteCard } from "../redux/slices/walletSlice";
import SingleCard from "./SingleCard";
import { BsTrashFill } from "react-icons/bs";

const Wallet = () => {
  const dispatch = useDispatch();
  const { listOfCards, randomUser } = useSelector((state) => state.walletList);

  return (
    <div>
      <h2>Active card</h2>
      <div>
        {listOfCards.slice(0, 1).map((card, i) => {
          return (
            <div key={i}>
              <SingleCard
                cardNumber={card.cardNumber}
                firstName={randomUser.firstName}
                lastName={randomUser.lastName}
                validMonth={card.validMonth}
                validYear={card.validYear}
                cvc={card.cvc}
                vendor={card.vendor}
              />
            </div>
          );
        })}
      </div>
      <h3>Inactive cards</h3>
      <div>
        {listOfCards.slice(1, 4).map((card, i) => {
          return (
            <div key={i}>
              <div onClick={() => dispatch(changeActive(card))}>
                <SingleCard
                  cardNumber={card.cardNumber}
                  firstName={randomUser.firstName}
                  lastName={randomUser.lastName}
                  validMonth={card.validMonth}
                  validYear={card.validYear}
                  cvc={card.cvc}
                  vendor={card.vendor}
                />
              </div>
              <button
                className="deleteButton"
                onClick={() => dispatch(deleteCard(card.id))}
              >
                <BsTrashFill />
              </button>
            </div>
          );
        })}
      </div>
      {listOfCards.length < 4 ? (
        <Link to={{ pathname: "/addcard" }}>
        <button className="activeBtn">Add new card</button>
      </Link>
      ) : 
      <div>
            <button disabled className="disabledBtn">Add new card</button>
            <br />
            <small style={{fontStyle:"italic"}}>You can only have 4 cards at a time, please remove one if you wish to create a new one!</small>
        </div>
      }
    </div>
  );
};

export default Wallet;
