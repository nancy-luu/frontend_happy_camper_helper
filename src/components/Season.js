import React from "react";
import { Row, Col } from 'react-bootstrap';

import ItemCollection from './ItemCollection';
import Trails from './Trails'

export default function Season({ handleFall, handleWinter, handleSpring, handleSummer, items, seasonsSelected, trails, handleAddItem, seasonClicked}) {

    return (
        <div className="collection">
            <nav className ="seasonButtons">
                <button type="button" className="btn btn-fall hover-slide-right" style={{fontSize: 20}} onClick={handleFall}><span>FALL</span></button> 
                <button type="button" className="btn btn-winter hover-slide-right" style={{fontSize: 20}} onClick={handleWinter}><span>WINTER</span></button>    
                <button type="button" className="btn btn-spring hover-slide-right" style={{fontSize: 20}} onClick={handleSpring}><span>SPRING</span></button> 
                <button type="button" className="btn btn-summer hover-slide-right" style={{fontSize: 20}} onClick={handleSummer}><span>SUMMER</span></button>   
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
