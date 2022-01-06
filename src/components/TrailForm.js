import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function TrailForm({ item, trails }) {

    let itemTrailId = item.trail_id

    // console.log(itemTrailId)

    let filteredTrail = trails.filter((t) => t.id === itemTrailId)

    let uniqueFilteredTrail = [...new Map(filteredTrail.map((trail) => [trail["trail_name"], trail])).values()]

    console.log(uniqueFilteredTrail)
     
    return (
      <Container>
            <div className="trailForm" width = "125rem" height="125rem">
                {filteredTrail.map((t) => <a key={t.id} href={t.trail_url} target="_blank">{t.trail_name}</a>)}
            </div>
      </Container>
    )
}