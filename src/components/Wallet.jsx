import { useSelector, useDispatch } from "react-redux";
import { changeActive, deleteCard } from "../redux/slices/walletSlice";
import SingleCard from "./SingleCard"
import {BsTrashFill} from "react-icons/bs"

const Wallet = () => {
  const dispatch = useDispatch();
  const {listOfCards} = useSelector((state) => state.walletList);

  return (
    <div>
      <div>
        {listOfCards.slice(0, 1).map((card, i) => {
          return (
            <div key={i} >
              <SingleCard
                cardNumber={card.cardNumber}
                firstName= {card.firstName}
                lastName={card.lastName}
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
            <div key={i} className="inactiveCards">
              <div onClick={() => dispatch(changeActive(card))}>
                <SingleCard
                  cardNumber={card.cardNumber}
                  firstName= {card.firstName}
                  lastName={card.lastName}
                  validMonth={card.validMonth}
                  validYear={card.validYear}
                  cvc={card.cvc}      
                  vendor={card.vendor}
              />
                </div>
                <button className="deleteButton" onClick={() => dispatch(deleteCard(card.id))}>
                  <BsTrashFill/>
                </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wallet;
