import React from "react";
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';


// save the state for which season is clicked
// trigger a function that renders all the items for that season

export default function NavBar ({ handleMyList, handleNewItem, handleFall, handleWinter, handleSpring, handleSummer }){

    return (
        <>
            <nav className ="navBar">
                <Row>
                    <Col>
                        <h1>HAPPY CAMPER HELPER</h1>
                    </Col>
                    <Col>
                        <div>
                            <Link className="links" to="/" >Home</Link> 
                            <Link className="links" to="/myList">My List</Link> 
                            <Link className="links" to="/items">Items</Link>
                        </div>
                    </Col>
                </Row>
            </nav>
        </>
    )
}

{/* <nav className ="navBar">
    <button type="button" className="btn btn-success" style={{fontSize: 20}} onClick={() => handleMyList()}>MY LIST</button> 
    <button type="button" className="btn btn-success" style={{fontSize: 20}} onClick={() => handleNewItem()}>NEW ITEM</button> 
    <button type="button" className="btn btn-success" style={{fontSize: 20}} onClick={handleFall}>FALL</button> 
    <button type="button" className="btn btn-success" style={{fontSize: 20}} onClick={handleWinter}>WINTER</button>    
    <button type="button" className="btn btn-success" style={{fontSize: 20}} onClick={handleSpring}>SPRING</button> 
    <button type="button" className="btn btn-success" style={{fontSize: 20}} onClick={handleSummer}>SUMMER</button>   
</nav> */}





