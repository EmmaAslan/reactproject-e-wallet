import Home from "./Home";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomUser } from "../redux/slices/walletSlice";

const StartApp = () => {
    const dispatch = useDispatch();
    const [startApp, setStartApp] = useState(false)
    const { listOfCards } = useSelector((state) => state.walletList);
    return ( 
        <div>
          <button className={startApp && "hideStartButton"} onClick={() => {
            setStartApp(!startApp);
            dispatch(getRandomUser(listOfCards));
          }}>
         {!startApp ? "Open e-wallet" : null}
          </button>

       {startApp && (
          <Home />)}
        </div>
     );
}
 
export default StartApp;