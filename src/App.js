import React, {useEffect, useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import NavBar from './components/NavBar'
import Home from './components/Home'
import ItemCollection from './components/ItemCollection';
import Trails from './components/Trails'
import MyList from './components/MyList';
import NewItem from './components/NewItem'

export default function App() {
  const [items, setItems] = useState([]);
  const [trails, setTrails] = useState([]);
  const [seasonsSelected, setSeasonsSelected] = useState([]);
  const [addedItems, setAddedItems] = useState([]);
  const [myItems, setMyItems] = useState([]);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [error, setError] = useState({})
  const [newItems, setNewItems] = useState([]);


  // useEffect fetch specific for a season needs to be pulled down here
  // {props.season_name}

  useEffect(() => {
    fetch("http://localhost:9292/items")
      .then((resp) => resp.json())
      .then((items) => setItems(items));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/trails")
      .then((resp) => resp.json())
      .then((trails) => setTrails(trails));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/my_list")
      .then((resp) => resp.json())
      .then((addedItems) => setAddedItems(addedItems));
  }, [updateSuccess]);


  function handleHome(){
  }

  function handleMyList(item){
  }

  function handleNewItem(){
  }

  function handleAddItem(item){
    let data = {id: item.id}

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

  function handleBuyItem(item){
    // setItems(items.map((i) => i.id === item.id? {...i, added:true} : i))
  }

  function handleFall({}){
    setSeasonsSelected(1)
  }

  function handleWinter({}){
    setSeasonsSelected(2)
  }

  function handleSpring({}){
    setSeasonsSelected(3)
  }

  function handleSummer({}){
    setSeasonsSelected(4)
  }

  function handleSubmit(e) {
    e.preventDefault();
    // fetch("http://localhost:9292/items", {
    //   method: 'POST',
    //   headers:  {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   },
    //   body: JSON.stringify({
    //     name: name,
    //     description: description,
    //     shopping_url: shopping_url,
    //     image_url: image_url,
    //   }),
    // })
    // .then((resp) => resp.json())
    // .then((newItems) => setNewItems(newItems))
    console.log("SUBMIT!")
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
                handleBuyItem={handleBuyItem}
              />
            </Route>
            <Route exact path="/newItem">
              <NewItem handleSubmit={handleSubmit}/>
            </Route>
            <Route exact path="/collection">
              <Row className="trailRow">
                <Trails items={items} seasonSelected={seasonsSelected} trails={trails}/>
              </Row>
              <Row>
              <ItemCollection 
                items={items} 
                seasonSelected={seasonsSelected} 
                handleAddItem={handleAddItem} 
                handleBuyItem={handleBuyItem}
              />
              </Row>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

{/* <NavBar className="navBar" items={items} filteredItems={filteredItems} handleSeason={handleSeason}/> */}
