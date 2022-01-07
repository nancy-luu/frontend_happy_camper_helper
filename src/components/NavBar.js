import React from "react";
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';


export default function NavBar ({ }){

    return (
        <nav className="navBar">
            <Row>
                    <div>
                        <Link id="first" className="custom-btn btn-4" to="/" ><span>HOME</span></Link> 
                        <Link id="first" className="custom-btn btn-4" to="/items"><span>ITEMS</span></Link>
                        <Link id="first" className="custom-btn btn-4" to="/myList"><span>MY LIST</span></Link> 
                    </div>
            </Row>
        </nav>
    )
}





