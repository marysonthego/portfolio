import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DataOwner } from "components/todosforme/DataOwner";

export function TodosForMe() {
  
  return (
    <>
      <Row>
        <Col className="todosTitle">
          <span>
              Todos For Me 
          </span>
        </Col>
        
      </Row>
      <Row>
        <DataOwner />
      </Row>
      <Row style={{ marginTop: "5px" }}>
        <footer>
          <Col align="right">
            <span>
              <img src="media/mtransparentsmall.png" alt="M"/>
            </span>
          </Col>
        </footer>
      </Row>
    </>
  );
}
