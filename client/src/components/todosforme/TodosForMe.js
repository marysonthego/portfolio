import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
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
              Todos For Me <img src="media/24x24whitecheck.png" alt="white checkmark"/>
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
              <img src="media/24x24whitecheck.png" alt="white checkmark"/>
            </span>
          </Col>
        </footer>
      </Row>
    </>
  );
}
