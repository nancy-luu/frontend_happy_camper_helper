import React, {useEffect, useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar'
import Home from './components/Home'
import MyList from './components/MyList';
import Season from './components/Season'

export default function App() {
  const [items, setItems] = useState([]);
  const [trails, setTrails] = useState([]);
  const [seasonsSelected, setSeasonsSelected] = useState([]);
  const [addedItems, setAddedItems] = useState([]);
  const [myItems, setMyItems] = useState([]);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [error, setError] = useState({})
  const [seasonClicked, setSeasonClicked] = useState(false)


  // useEffect fetch specific for a season needs to be pulled down here
  // {props.season_name}

  useEffect(() => {
    fetch("http://localhost:9292/items")
      .then((resp) => resp.json())
      .then((items) => setItems(items));
  }, [updateSuccess]);

  useEffect(() => {
    fetch("http://localhost:9292/trails")
      .then((resp) => resp.json())
      .then((trails) => setTrails(trails));
  }, []);


  function handleHome(){
  }

  function handleMyList(item){
  }

  function handleNewItem(){
  }

  function handleAddItem(item){
    let data = {id: item.id, added: !item.added}
    setUpdateSuccess(false)

    fetch("http://localhost:9292/my_list", {
      method: 'PATCH',
      headers:  {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    }).then((resp) => resp.json())
    .then((updateSuccess) => setUpdateSuccess(true))
    .catch((error) => setError(error))
  }


  function handleFall({}){
    setSeasonsSelected(1)
    setSeasonClicked(true)
  }

  function handleWinter({}){
    setSeasonsSelected(2)
    setSeasonClicked(true)
  }

  function handleSpring({}){
    setSeasonsSelected(3)
    setSeasonClicked(true)
  }

  function handleSummer({}){
    setSeasonsSelected(4)
    setSeasonClicked(true)
  }

  return (
    <Router>
      <div className="App">
        <NavBar 
          className="navBar" 
          handleMyList={handleMyList}
          handleNewItem={handleNewItem}
          handleFall={handleFall} 
          handleWinter={handleWinter}
          handleSpring={handleSpring}
          handleSummer={handleSummer}
        />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/myList">
                <MyList 
                  addedItems={addedItems} 
                  handleAddItem={handleAddItem} 
                  updateSuccess={updateSuccess}
                  setAddedItems={setAddedItems}
                />
            </Route>
            <Route exact path="/items">
              <Season 
                handleFall={handleFall} 
                handleWinter={handleWinter} 
                handleSpring={handleSpring} 
                handleSummer={handleSummer} 
                items={items} 
                seasonsSelected={seasonsSelected} 
                trails={trails}
                handleAddItem={handleAddItem} 
                seasonClicked={seasonClicked}
              />  
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

