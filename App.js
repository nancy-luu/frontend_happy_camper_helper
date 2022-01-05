import React, {useEffect, useState} from 'react';
import { Row, Col } from 'react-bootstrap';

import Header from './components/Header';
import NavBar from './components/NavBar'
import ItemCollection from './components/ItemCollection';
import MyList from './components/MyList'

export default function App() {
  const [items, setItems] = useState([]);
  const [seasonsSelected, setSeasonsSelected] = useState([])
  const [addedItems, setAddedItems] = useState([])
  const [myItems, setMyItems] = useState([])


  // useEffect fetch specific for a season needs to be pulled down here
  // {props.season_name}

  useEffect(() => {
    fetch("http://localhost:9292/items")
      .then((resp) => resp.json())
      .then((items) => setItems(items));
  }, []);
  // console.log(items)

  function handleMyList(){
    setSeasonsSelected([])
    setAddedItems(itemsTrue())
  }

  function itemsTrue(){
    return items.filter((i) => i.added)
  }

  function handleAddItem(item){
    setItems(items.map((i) => i.id === item.id? {...i, added:true} : i))
  }

  function handleHome({}){
    setSeasonsSelected()
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

  console.log("TESTING")

  return (
    <div className="App">
      <Header className="header" />
      <NavBar 
        className="navBar" 
        handleHome={handleHome}
        handleMyList={handleMyList}
        handleFall={handleFall} 
        handleWinter={handleWinter}
        handleSpring={handleSpring}
        handleSummer={handleSummer}
      />
      <ItemCollection items={items} seasonSelected={seasonsSelected} handleAddItem={handleAddItem}/>
      <MyList items={items} setMyItems={setMyItems} myListItems={itemsTrue()}/>
    </div>
  );
}

{/* <NavBar className="navBar" items={items} filteredItems={filteredItems} handleSeason={handleSeason}/> */}
