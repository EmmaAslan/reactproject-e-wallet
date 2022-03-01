import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";
import StartApp from "./pages/StartApp";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <StartApp {...props} />} />
        <Route path="/home" render={(props) => <Home {...props} />} />
        <Route path="/addcard" render={(props) => <AddCard {...props} />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
