import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../redux/slices/walletSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
import SingleCard from "./SingleCard";
import NumberFormat from "react-number-format";

const AddNewCard = () => {
  const dispatch = useDispatch();
  const [cardNumber, setCardNumber] = useState("xxxx xxxx xxxx xxxx");
  const [validMonth, setValidMonth] = useState("xx");
  const [validYear, setValidYear] = useState("xx");
  const [cvc, setCvc] = useState("xxx");
  const [vendor, setVendor] = useState("");
  const [value, setValue] = useState("default");

  const { listOfCards, randomUser } = useSelector((state) => state.walletList);

  const handleAddCard = () => {
      if (listOfCards.length <= 3)
      dispatch (
        addCard ({
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
    else alert("You have already reached the maximum limit of 4 cards.");
  };

  let changeCardNumber = (e) => {
    const value = e.target.value.replace(/ /g, "");
    let inputNums = value.replace(/\D/g, "");
    if (inputNums.length > 16) {
      inputNums = inputNums.substr(0, 16);
    }
    const spaces = inputNums.match(/.{1,4}/g);
    let insertSpaces = "";
    if (spaces) {
      insertSpaces = spaces.join(" ");
    }
    setCardNumber(insertSpaces);
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
  };

  return (
    <div>
      <h2>Add a new bank card</h2>
      <SingleCard
        cardNumber={cardNumber}
        firstName={randomUser.firstName}
        lastName={randomUser.lastName}
        validMonth={validMonth}
        validYear={validYear}
        cvc={cvc}
        vendor={vendor}
      />
     
      <form >
        <div>
          {/* <NumberFormat 
            format="#### #### #### ####"
            name="cardNumber"
            id="cardNumber"
            placeholder="Card number"
            onChange={changeCardNumber}
            required
          />  */}

          {/* CARD NUMBER INPUT */}
          <input 
            name="cardNumber"
            id="cardNumber"
            placeholder="Card Number"
            maxLength="16"
            onChange={changeCardNumber}
            required
          />
          {/* CVC INPUT */}
          <NumberFormat
            format="###"
            name="cvc"
            id="cvc"
            placeholder="CVC"
            onChange={changeCvc}
          />
        </div>

        <div>
          {/* FIRST NAME INPUT */}
          <input
            type="text"
            placeholder={randomUser.firstName}
            id="firstName"
            readOnly
            disabled
          />
          {/* LAST NAME INPUT */}
          <input
            type="text"
            placeholder={randomUser.lastName}
            id="lastName"
            readOnly
            disabled
          />
        </div>
        {/* bara siffrorna 1-12*/}
        <div>
          {/* VALID MONTH INPUT */}
          <NumberFormat 
            format="##"
            name="validMonth"
            id="validMonth"
            placeholder="Month"
            onChange={changeValidMonth}
          />
          {/* inte tidigare år  */}
          {/* VALID YEAR INPUT */}
          <NumberFormat 
            format="##"
            name="validYear"
            id="validYear"
            placeholder="Year"
            onChange={changeValidYear}
          />
        </div>
        <div>
          {/* DROPDOWN FOR VENDOR */}
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
      </form>
    </div>
  );
};
export default AddNewCard;
