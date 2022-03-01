import swedbankLogo from "../logos/swedbanklogo.png";
import icaLogo from "../logos/icalogo.png";
import visaLogo from "../logos/visalogo.png";
import LElogo from "../logos/LElogo.png";
import mastercard from "../logos/mastercard.png"
import chip from "../logos/chip.png"
import { useSelector } from "react-redux";

const SingleCard = (props) => {
  const { randomUser } = useSelector((state) => state.walletList); 

  return (
    <div>
      <div
        className={
          props.vendor === "Visa"
            ? "cardVisa"
            : props.vendor === "Swedbank"
            ? "cardSwedbank"
            : props.vendor === "LE Bank"
            ? "cardLE"
            : props.vendor === "Ica"
            ? "cardIca"
            : "card"
        }
      >
        <div className="emptyField"></div>
        <div className="mastercard">
          <img src={mastercard} alt="" />
        </div>
        <div className="logo">
          {props.vendor === "Visa" ? (
            <img src={visaLogo} alt="" />
          ) : props.vendor === "Swedbank" ? (
            <img src={swedbankLogo} alt="" />
          ) : props.vendor === "LE Bank" ? (
            <img src={LElogo} alt="" />
          ) : props.vendor === "Ica" ? (
            <img src={icaLogo} alt="" />
          ) : null}
        </div>
        <div className="chip">
          <img src={chip} alt="" />
        </div>
        <div className="cardNumbers">
          <p>{props.cardNumber}</p>
        </div>
        <div className="name">
          <p>
            {randomUser.firstName} {randomUser.lastName}
          </p>
        </div>
        <div className="date">
        
          <p>
            {props.validMonth}/{props.validYear}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
