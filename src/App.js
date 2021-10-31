import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateEmployee from "./components/AddEmployee";
import Home from "./components/Home";
import EditEmployee from "./components/EditEmployee";
import Navbar from "./components/Navbar"

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path= "/" component= {Home} />
          <Route path= "/create" component= {CreateEmployee} />
          <Route path= "/update/:id" component= {EditEmployee} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
