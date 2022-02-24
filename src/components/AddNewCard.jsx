import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../redux/slices/walletSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
import SingleCard from "./SingleCard";

const AddNewCard = () => {
  const dispatch = useDispatch();

  const { listOfCards } = useSelector((state) => state.walletList);
  const [cardNumber, setCardNumber] = useState("xxxx xxxx xxxx xxxx");
  const [firstName, setFirstName] = useState("React");
  const [lastName, setLastName] = useState("von Projektsson");
  const [validMonth, setValidMonth] = useState("xx");
  const [validYear, setValidYear] = useState("xx");
  const [cvc, setCvc] = useState("");
  const [vendor, setVendor] = useState("");
  const [value, setValue] = useState("default");

  const handleAddCard = () => {
    if (listOfCards.length <= 3)
      dispatch(
        addCard({
          cardNumber: cardNumber,
          firstName: firstName,
          lastName: lastName,
          validMonth: validMonth,
          validYear: validYear,
          cvc: cvc,
          id: Date.now(),
          vendor: vendor,
        })
      );
    else alert("You already have maximum of 4 cards");
  };   

  let changeCardNumber = (e) => {
    setCardNumber(e.target.value);
  };
  let changeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  let changeLastName = (e) => {
    setLastName(e.target.value);
  };
  let changeValidMonth = (e) => {
    setValidMonth(e.target.value);
  };
  let changeValidYear = (e) => {
    setValidYear(e.target.value);
  };
  let changeCvc = (e) => {
    setCvc(e.target.value);
  };

  let changeVendor = (e) => {
    setVendor(e.target.value);
  } 
  
  return (
    <div>
      <h2>Add a new bank card</h2>
      <SingleCard 
          cardNumber={cardNumber}
          firstName= {firstName}
          lastName={lastName}
          validMonth={validMonth}
          validYear={validYear}
          cvc={cvc}      
          vendor={vendor}
      />
     
      <div>
        <div>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card number"
            pattern="\d*" 
            maxLength="16"
            id="cardNumber"
            //pattern="[0-9]{16}"
            //pattern="/^[\d+\s]*$/"
            //maxLength="16"
            //minLength="16"
            /*fixa pattern - grupperade i 4 */
            onChange={changeCardNumber}
            //fixa max-antal och så xxx står kvar?
          />
          <input
            type="text"
            placeholder="CVC"
            id="cvc"
            maxLength="3"
            onChange={changeCvc}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Firstname"
            id="firstName"
            onChange={changeFirstName}
          />
          <input
            type="text"
            placeholder="Lastname"
            id="lastName"
            onChange={changeLastName}
          />
        </div>
        {/*fixa max antal siffror (2) + bara siffrorna 1-12*/}
        <div>
          <input
            type="tel"
            placeholder="Month"
            id="validMonth"
            onChange={changeValidMonth}
          />
          {/*fixa max antal siffror (2) + inte tidigare år  */}
          <input
            type="tel"
            name="validYear"
            id="validYear"
            pattern="xx/xx"
            placeholder="Year"
            onChange={changeValidYear}
          />
          </div>
          <div>
          <select name="vendor" id="vendor" defaultValue={value} onChange={changeVendor}>
            <option value="default" disabled hidden>Choose vendor</option>
            <option value="Visa">Visa</option>
            <option value="LE Bank">LE Bank</option>
            <option value="Swedbank">Swedbank</option>
            <option value="Ica">Ica</option>
          </select>
          <p>{value}</p>
          
          </div>
        <Link to="/">
          <button onClick={handleAddCard}>Add card</button>
        </Link>
      </div>
    </div>
  );
};
export default AddNewCard;
