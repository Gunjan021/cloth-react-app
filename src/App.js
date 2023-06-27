import logo from "./logo.svg";
import "./App.css";
import Navigation from "./component/Navigation";
import Home from "./component/Home";

function App() {
  return (
    <div className="bg-my-background bg-no-repeat bg-cover">
      <div className="lg:p-14">
        <Navigation></Navigation>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
