import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import AddNew from './AddNew';
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Item from "./Item";
import NotFound from './404';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  // on page load, get snacks & drinks from back end, and store them into state.
  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getItem('snacks');
      let drinks = await SnackOrBoozeApi.getItem('drinks');
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  //add new items & render
  const updateState = (item) => {
    const {type, description, name, recipe, serve} = item;
    const id = name.toLowerCase().replace(" ", "-");
    if (type === 'snack') {
      setSnacks(snack => [...snacks, {id, name, description, recipe, serve}]);
    } else {
      setDrinks(drink => [...drinks, {id, name, description, recipe, serve}]);
    }
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/home">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} path='snacks' title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Item items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} path='drinks' title="Drinks" />
            </Route>
            <Route path="/drinks/:id">
              <Item items={drinks} cantFind="/drinks" />
            </Route>
            <Route path="/add">
              <AddNew updateState={updateState} snacks={snacks} drinks={drinks}/>
            </Route>
            <Route path="/*">
              <NotFound />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
