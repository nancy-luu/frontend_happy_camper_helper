import React, {useEffect, useState} from 'react';
import { Row, Col } from 'react-bootstrap';

import Header from './components/Header';
import NavBar from './components/NavBar'
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


  function handleHome(){
    setSeasonsSelected([])
  }

  function handleMyList(item){
    setSeasonsSelected([])
    setAddedItems(itemsTrue())
    return (<p>HI</p>)
  }

  function handleNewItem(){
    setSeasonsSelected([])
    setAddedItems(itemsTrue())

  }

  function itemsTrue(){
    return items.filter((i) => i.added)
  }

  function handleAddItem(item){
    setItems(items.map((i) => i.id === item.id? {...i, added:true} : i))
  }

  function handleBuyItem(item){
    setItems(items.map((i) => i.id === item.id? {...i, added:true} : i))
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

  return (
    <div className="App">
      <Header className="header" handleHome={handleHome}/>
      <NavBar 
        className="navBar" 
        handleMyList={handleMyList}
        handleNewItem={handleNewItem}
        handleFall={handleFall} 
        handleWinter={handleWinter}
        handleSpring={handleSpring}
        handleSummer={handleSummer}
      />
      <Row>
        <NewItem />
      </Row>
      <Row>
        <Trails items={items} seasonSelected={seasonsSelected} trails={trails}/>
      </Row>
      <Row>
        <ItemCollection items={items} seasonSelected={seasonsSelected} handleAddItem={handleAddItem} handleBuyItem={handleBuyItem}/>
      </Row>
    </div>
  );
}

{/* <NavBar className="navBar" items={items} filteredItems={filteredItems} handleSeason={handleSeason}/> */}
