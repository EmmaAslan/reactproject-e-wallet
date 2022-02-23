import swedbankLogo from "../logos/swedbanklogo.png";
import icaLogo from "../logos/icabankenlogo.png";
import visaLogo from "../logos/visalogo.png";
import LElogo from "../logos/LElogo.png";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../redux/slices/walletSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddNewCard = () => {
  const dispatch = useDispatch();
  const { latestId } = useSelector((state) => state.walletList);
  const { notActiveCards } = useSelector((state) => state.walletList);
  const [cardNumber, setCardNumber] = useState("xxxx xxxx xxxx xxxx");
  const [firstName, setFirstName] = useState("React");
  const [lastName, setLastName] = useState("von Projektsson");
  const [validMonth, setValidMonth] = useState("xx");
  const [validYear, setValidYear] = useState("xx");
  const [cvc, setCvc] = useState("");
  const [vendor, setVendor] = useState("");
  const [value, setValue] = useState("default");

  const handleAddCard = () => {
    let cardNumber = document.querySelector("#cardNumber").value;
    let firstName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;
    let validMonth = document.querySelector("#validMonth").value;
    let validYear = document.querySelector("#validYear").value;
    let cvc = document.querySelector("#cvc").value;
    let vendor = document.querySelector("#vendor").value;
    if (notActiveCards.length <= 2)
      dispatch(
        addCard({
          cardNumber: cardNumber,
          firstName: firstName,
          lastName: lastName,
          validMonth: validMonth,
          validYear: validYear,
          cvc: cvc,
          vendor: vendor,
          id: latestId + 1
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
      <div className="card">
        <div className="whoKnows"></div>
        <div className="logo" >
          {vendor == "Visa" ? <img src={visaLogo} alt="" /> : vendor == "Swedbank" ? <img src={swedbankLogo} alt="" /> : vendor == "LE Bank" ? <img src={LElogo} alt="" /> : vendor == "Ica" ? <img src={icaLogo} alt="" /> : null}
        </div>
        <div className="chip">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9Ijc2IiB2aWV3Qm94PSIwIDAgMTAwIDc2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjEwMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGM0QwOEYiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkFENzY2IiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNOTIuNzI3IDc1LjQ1NWgtODUuNDU1Yy00IDAtNy4yNzMtMy4yNzMtNy4yNzMtNy4yNzN2LTYwLjkwOWMwLTQgMy4yNzMtNy4yNzMgNy4yNzMtNy4yNzNoODUuNDU1YzQgMCA3LjI3MyAzLjI3MyA3LjI3MyA3LjI3M3Y2MC45MDljMCA0LTMuMjczIDcuMjczLTcuMjczIDcuMjczIiBmaWxsPSJ1cmwoI2EpIi8+PHBhdGggZD0iTTcyLjEyMyAyOC40ODVoMjcuODc4di0xLjgxOGgtMjkuNjQ4Yy0uOTY1IDAtMS44MzIuNjAxLTIuMTcyIDEuNTA0LTIuMjg3IDYuMDcyLTIuNDMzIDEyLjU5NC0uNDM4IDE5Ljg0Mi40NTUgMS42NTQuNDM1IDMuNC0uMSA1LjAzLTIuMDM2IDYuMTk1LTcuNzc5IDE5Ljk4OC0xOC41NTEgMTkuOTg4LTExLjAwOCAwLTE2LjA5Ni0xNS42OTktMTcuMzM0LTIxLjk1Mi0uMTU1LS43ODQtLjEyMi0xLjU5Mi4xMDctMi4zNTcgMS42OTUtNS42NDggMi4wOTQtMTAuNjQtLjAxNi0xOS41OS0uMjA1LS44Ny0uMTgyLTEuNzgzLjA0OC0yLjY0NiA0LjQ4LTE2Ljc1NSAxMi44ODItMjAuMTQ3IDEyLjk2NS0yMC4xNzkuMzU2LS4xMzIuNTkzLS40NzIuNTkzLS44NTJ2LTUuNDU1aC0xLjgxOHYzLjc3NmMwIC42NS0uMzMyIDEuMjUyLS44ODQgMS41OTYtMi44MDMgMS43NDItOC45MDQgNi45MzYtMTIuNTU3IDIwLjQ1Ni0uMTguNjY4LS43ODEgMS4xMzYtMS40NzMgMS4xMzNsLTI4LjcyMi0uMTM5djEuODE4bDI3LjQxNi4xMzNjMS40NjguMDA3IDIuNzM1IDEuMDQxIDMuMDM3IDIuNDc4IDEuNDE2IDYuNzQxIDEuMjE5IDExLjAzOS4wODIgMTUuNDU4LS4zMTYgMS4yMy0xLjQyIDIuMDk2LTIuNjkgMi4xMDlsLTI3Ljg0NC4yN3YxLjgxOWwyOC42MDUtLjI3OGMuNjkzLS4wMDcgMS4yOTYuNDczIDEuNDM1IDEuMTUyIDEuNDQyIDcuMDQxIDYuODg3IDIzLjA3IDE5LjA1IDIzLjA3IDYuMzY4IDAgMTIuMDYyLTQuMjUgMTYuNDY3LTEyLjI5IDIuNjQ0LTQuODI4IDQuMDY3LTkuNTkxIDQuNTQxLTExLjM0NmgyOS45MDF2LTEuODE4aC0yOC4wMTZjLTEuMTU4IDAtMi4xODMtLjc3Mi0yLjQ4OS0xLjg4OS0xLjY5Mi02LjE2NC0xLjc2MS0xMS43NTUtLjItMTYuOTU5LjM3MS0xLjIzNSAxLjUzOC0yLjA2MSAyLjgyNy0yLjA2MXptLTE3LjE1LTIxLjkxNGMuMDQ1LjAyMiA0LjUxOSAyLjMyMiA5LjI1MyAxMC4wNDEuMTcyLjI4LjQ3LjQzNC43NzYuNDM0LjE5OCAwIC4zOTktLjA2NC41NzEtLjIwMi4zNjUtLjI5Mi40MTYtLjgzNy4xNzItMS4yMzUtMy41Ny01LjgwNS03LjAyNC04LjcxLTguNzc1LTkuOTMxLS40My0uMjk5LS42OC0uNzkyLS42OC0xLjMxNXYtNC4zNjNoLTEuODE4djUuNzU4YzAgLjM0NS4xOTUuNjU5LjUwMi44MTN6IiBmaWxsPSIjMEMwMjAwIi8+PC9zdmc+"
            alt=""
          />
        </div>
        <div className="cardNumbers">
          <p>{cardNumber}</p>
        </div>
        <div className="name">
          <p>
            {firstName} {lastName}
          </p>
        </div>
        <div className="date">
          <p>
            {validMonth}/{validYear}
          </p>
        </div>
      </div>
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
          {/* event => setValue(event.target.value) */}
            {/* onChange={handleSelect} */}
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
