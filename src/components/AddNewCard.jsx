import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../redux/slices/walletSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
import SingleCard from "./SingleCard";
import NumberFormat from "react-number-format";

const AddNewCard = () => {
  const dispatch = useDispatch();

  const { listOfCards, randomUser } = useSelector((state) => state.walletList);
  const [cardNumber, setCardNumber] = useState("xxxx xxxx xxxx xxxx");
  //const [firstName, setFirstName] = useState("Name");
  //const [lastName, setLastName] = useState("Lastname");
  const [validMonth, setValidMonth] = useState("xx");
  const [validYear, setValidYear] = useState("xx");
  const [cvc, setCvc] = useState("xxx");
  const [vendor, setVendor] = useState("");
  const [value, setValue] = useState("default");

  const handleAddCard = () => {
    if (listOfCards.length <= 3)
      dispatch(
        addCard({
          cardNumber: cardNumber,
          randomUser: {
            firstName: randomUser.firstName,
            lastName: randomUser.lastName,
          },
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

    /*if(cardNumber < 16){
      setCardNumber(e.target.value);
    }
    else alert ("Must be 16 numbers")*/
  };
  /* let changeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  let changeLastName = (e) => {
    setLastName(e.target.value);
  };*/
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
  };

  //var NumberFormat = require('react-number-format');

  return (
    <div>
      <h2>Add a new bank card</h2>
      <SingleCard
        cardNumber={cardNumber}
        //firstName={firstName}
        //lastName={lastName}
        validMonth={validMonth}
        validYear={validYear}
        cvc={cvc}
        vendor={vendor}
      />

      <div>
        <div>
          <NumberFormat
            format="#### #### #### ####"
            name="cardNumber"
            id="cardNumber"
            placeholder="Card number"
            onChange={changeCardNumber}
            allowEmptyFormatting={false}
          />

          <NumberFormat
            format="###"
            name="cvc"
            id="cvc"
            placeholder="CVC"
            onChange={changeCvc}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder={randomUser.firstName}
            id="firstName"
            //onChange={changeFirstName}
          />
          <input
            type="text"
            placeholder={randomUser.lastName}
            id="lastName"
            //onChange={changeLastName}
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
          <select
            name="vendor"
            id="vendor"
            defaultValue={value}
            onChange={changeVendor}
          >
            <option value="default" disabled hidden>
              Choose vendor
            </option>
            <option value="Visa">Visa</option>
            <option value="LE Bank">LE Bank</option>
            <option value="Swedbank">Swedbank</option>
            <option value="Ica">Ica</option>
          </select>
        </div>
        <Link to="/">
          <button onClick={handleAddCard}>Add card</button>
        </Link>
      </div>
    </div>
  );
};
export default AddNewCard;
