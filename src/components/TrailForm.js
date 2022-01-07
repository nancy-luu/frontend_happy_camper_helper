import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function TrailForm({ trails }) {
     
    return (
      <Container>
            <div className="trailForm" width = "125rem" height="125rem">
                {trails.map((t) => <a key={t.id} href={t.trail_url} target="_blank">{t.trail_name}</a>)}
            </div>
      </Container>
    )
}