import "./App.css";
import Navigation from "./component/Navigation";
import Home from "./component/Home";
import Carosal from "./component/Carosal";
import { Carousel } from "@material-tailwind/react";

function App() {
  return (
    <div className="select-none bg-my-background bg-no-repeat bg-cover">
      <div className="lg:p-14">
        <Navigation></Navigation>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
