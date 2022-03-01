import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";
import { getRandomUser } from "./redux/slices/walletSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomUser());
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/addcard" render={(props) => <AddCard {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
