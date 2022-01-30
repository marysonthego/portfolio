import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import "bootstrap/dist/css/bootstrap.min.css";
import "components/styles/scss/bootstrap.scss";
import "components/styles/styles.css";
import { DataOwner } from "components/todosforme/DataOwner";

export function TodosForMe() {
  
  return (
    <>
      <Row>
        <Col>
          <span>
            {" "}
            <h3 className="h3">
              Todos For Me 
            </h3>
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
