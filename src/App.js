import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";

function App() {
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
