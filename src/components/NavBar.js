import React from "react";
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';


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





