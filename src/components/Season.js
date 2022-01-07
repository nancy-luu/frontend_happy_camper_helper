import React from "react";
import { Row, Col } from 'react-bootstrap';

import ItemCollection from './ItemCollection';
import Trails from './Trails'

export default function Season({ handleFall, handleWinter, handleSpring, handleSummer, items, seasonsSelected, trails, handleAddItem, seasonClicked}) {

    return (
        <div className="collection">
            <nav className ="seasonButtons">
                <button type="button" className="btn btn-success" style={{fontSize: 20}} onClick={handleFall}>FALL</button> 
                <button type="button" className="btn btn-success" style={{fontSize: 20}} onClick={handleWinter}>WINTER</button>    
                <button type="button" className="btn btn-success" style={{fontSize: 20}} onClick={handleSpring}>SPRING</button> 
                <button type="button" className="btn btn-success" style={{fontSize: 20}} onClick={handleSummer}>SUMMER</button>   
            </nav>
            <Row className="trailRow">
                {seasonClicked && <Trails items={items} seasonSelected={seasonsSelected} trails={trails}/>}
            </Row>
            <Row>
                <ItemCollection 
                    items={items} 
                    seasonSelected={seasonsSelected} 
                    handleAddItem={handleAddItem} 
                />
            </Row>
        </div>
    )
}
