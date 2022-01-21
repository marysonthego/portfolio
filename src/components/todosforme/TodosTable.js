import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { TodoFormModal } from "./TodoFormModal";
//import AnalogClock from "analog-clock-react";
import cellEditFactory from "react-bootstrap-table2-editor";
import paginationFactory from "react-bootstrap-table2-paginator";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "components/styles/tablestyles.css";
import "components/styles/formstyles.css";

export const TodosTable = ({
  todos,
  todoUpdate,
  todoDelete,
  todoMoveToCalendar,
  todoSubmit,
}) => {
  const [select, setSelect] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});

  // let options = {
  //   useCustomTime: false,
  //   width: "96px",
  //   border: true,
  //   borderColor: "#424242",
  //   baseColor: "#5a5a5e",
  //   centerColor: "#e5e5e5",
  //   centerBorderColor: "#424242",
  //   handColors: {
  //     second: "#192048",
  //     minute: "#e5e5e5",
  //     hour: "#e5e5e5",
  //   },
  // };

  const columns = [
    {
      dataField: "id",
      text: "Title",
      hidden: true,
    },
    {
      dataField: "title",
      sort: true,
      text: "Title",
      align: "left",
      headerStyle: () => {
        return { width: "15%" };
      },
    },
    {
      dataField: "description",
      text: "Description",
      align: "left",
      headerStyle: () => {
        return { width: "50%" };
      },
    },
    {
      dataField: "category",
      sort: true,
      text: "Category",
      align: "center",
      headerStyle: () => {
        return { width: "15%" };
      },
    },
    {
      dataField: "priority",
      sort: true,
      text: "Priority",
      align: "center",
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    {
      dataField: "createdDate",
      sort: true,
      text: "Created",
      align: "right",
      type: "date",
      formatter: (cell) => {
        let dateObj = cell;
        if (typeof cell !== "object") {
          dateObj = new Date(cell);
        }
        return dateObj.toLocaleDateString();
      },
      headerStyle: () => {
        return { width: "15%", align: "right" };
      },
    },
  ];

  const selectRow = {
    mode: "checkbox",
    hideSelectAll: true,
    clickToSelect: true,
    clickToEdit: true,
    onSelect: (row, isSelect, rowIndex, e) => {
      setSelect(isSelect);
      setSelectedRow(row);
    },
  };

  function afterSaveCell(oldValue, newValue, row, column) {
    todoUpdate({ rid: row.id, col: column.dataField, value: newValue });
  }

  const handleModalAddtodo = (formtodo) => {
    todoSubmit(formtodo);
  };

  const toggleModal = () => {
    setShow(!show);
  };

  const handleAddToCalendar = (selectedRow) => {
    setSelect(false);
    todoMoveToCalendar(selectedRow);
  };

  const handleDelete = (id) => {
    setSelect(false);
    todoDelete(id);
  };

  return (
    <Container fluid>
      <div>
        <Row>
          <Col align="center">
            <button className="btn btn-add" onClick={toggleModal}>
              New Todo
            </button>
          </Col>
          <Col align="center">
            <button
              className="btn btn-add"
              onClick={(e) => handleAddToCalendar(selectedRow)}
              disabled={!select}
            >
              Add to Calendar
            </button>
          </Col>
          <Col align="center">
            <button
              className="btn btn-delete"
              onClick={(e) => handleDelete(selectedRow.id)}
              disabled={!select}
            >
              Delete
            </button>
          </Col>
          <hr />
        </Row>
        <BootstrapTable
          className="react-bootstrap-table"
          keyField="id"
          columns={columns}
          data={todos}
          headerClasses="custom-header"
          rowStyle={{
            fontSize: "12px",
            color: "#e5e5e5",
            background: "#131836",
          }}
          wrapperClasses="table-responsive"
          pagination={paginationFactory()}
          cellEdit={cellEditFactory({
            mode: "dbclick",
            blurToSave: true,
            onStartEdit: (row, column, rowIndex, columnIndex) => {},
            beforeSaveCell: (oldValue, newValue, row, column) => {},
            afterSaveCell,
          })}
          condensed
          selectRow={selectRow}
        />
        {/* <Row>
          <Col align="center">
            <AnalogClock {...options} />
          </Col>
        </Row> */}
        {show ? (
          <TodoFormModal
            show={show}
            toggleModal={toggleModal}
            handleModalAddtodo={handleModalAddtodo}
          />
        ) : null}
      </div>
    </Container>
  );
};
