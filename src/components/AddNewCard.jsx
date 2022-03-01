import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../redux/slices/walletSlice";
import { useState } from "react";
import SingleCard from "./SingleCard";

const AddNewCard = (props) => {
  const dispatch = useDispatch();
  const [cardNumber, setCardNumber] = useState("xxxx xxxx xxxx xxxx");
  const [validMonth, setValidMonth] = useState("xx");
  const [validYear, setValidYear] = useState("xx");
  const [cvc, setCvc] = useState("xxx");
  const [vendor, setVendor] = useState("");
  const [value, setValue] = useState("default");

  const { randomUser } = useSelector((state) => state.walletList);

  const handleAddCard = () => {
    props.setNewCard(true);
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
     
      <form onSubmit={() => {
          handleAddCard();
        }}>           
        <div>
          {/* <input
            type="text"
            ame="cardNumber"
            id="cardNumber"
            placeholder="Card number"
            onChange={(e) => {
              setCardNumber(e.target.value);
            }}
            pattern="[0-9]{16}"
            maxLength="16"
            required
          />  */}

          {/* CARD NUMBER INPUT */}
          <input 
            name="cardNumber"
            id="cardNumber"
            placeholder="Card Number"
            maxLength="16"
            pattern="[0-9]{16}"
            onChange={changeCardNumber}
            required
          />
          
          {/* CVC INPUT */}
          <input
            type="text"
            name="cvc"
            id="cvc"
            placeholder="CVC"
            onChange={changeCvc}
            pattern="[0-9]{3}"
            maxLength="3"
            required
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

        <div>
          {/* VALID MONTH INPUT */}
          <input
            type="text"
            name="validMonth"
            id="validMonth"
            placeholder="Month"
            onChange={changeValidMonth}
            pattern="[0-9]{2}"
            maxLength="2"
            required
          />
          
          {/* VALID YEAR INPUT */}
          <input
            type="text"
            name="validYear"
            id="validYear"
            placeholder="Year"
            onChange={changeValidYear}
            pattern="[0-9]{2}"
            maxLength="2"
            required
          />
        </div>

        <div>
          {/* DROPDOWN FOR VENDOR */}
          <select
            name="vendor"
            id="vendor"
            defaultValue={value}
            onChange={changeVendor}
            required
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
        {/* <Link to="/">
          <button onClick={handleAddCard}>Add card</button>
        </Link> */}

        <button type="submit" id="addCardBtn">
          Add card
        </button>
      </form>
    </div>
  );
};
export default AddNewCard;
