import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const RbCModal = ({
  show,
  eventCurrent,
  toggleModal,
  eventCreate,
  eventUpdate,
  eventDelete,
}) => {

  const [modalEvent, setModalEvent] = useState(eventCurrent);

  console.log(`modalEvent: `, modalEvent);

  const handleStartDate = (date) => {
    let start = new Date(date);
    setModalEvent(prev => ({
      ...prev, start: start, end: start
    }))
  };

  const handleEndDate = (date) => {
    let end = new Date(date);
    setModalEvent(prev => ({
      ...prev, end: end
    }))
  };

  const handleUntilDate = (date) => {
    let until = new Date(date);
    console.log(`until`, until);
    setModalEvent(prev => ({
      ...prev, until: until
    }))
  };

  const handleSubmit = () => {
    if (eventCurrent.id === 0) {
      console.log(`modalEvent`, modalEvent);
      eventCreate(modalEvent);
      toggleModal();
    } else {
      setModalEvent(prev => ({
        ...prev,
          id: eventCurrent.id
      }));
      eventUpdate(modalEvent);
      toggleModal();
    }
  };

  const handleFormSelect = (e) => {
    let nam = e.currentTarget.name;
    let val;
    switch (e.currentTarget.value) {
      case "0":
        val = 0;
        break;
      case "1":
        val = 1;
        break;
      case "2":
        val = 2;
        break;
      case "3":
        val = 3;
        break;
      case "4":
        val = 4;
        break;
      case "5":
        val = 5;
        break;
      case "6":
        val = 6;
        break;
      case "7": 
        val = 7;
        break;
        case "14": 
        val = 14;
        break;
        case "30": 
        val = 30;
        break;
      default:
        val = e.currentTarget.value;
        break;
    }
    setModalEvent(prev => ({
      ...prev,
        [nam]: val
    }));
  };

  const handleBlur = (e) => {
    let val = 
      e.currentTarget.type === "checkbox" ? e.currentTarget.checked : e.currentTarget.value;
    let nam = e.currentTarget.name;
    if(val === true)  val = 1;
    if(val === false) val = 0;
    setModalEvent(prev => ({
      ...prev,
        [nam]: val
    }));
    modalEvent[nam] = val;
  };

  const handleDelete = () => {
    eventDelete(modalEvent.id);
    toggleModal();
  };

  return (
    <Container fluid>
      <Modal show={show} >
        <Modal.Header>add/change event</Modal.Header>
        <Modal.Body>
          <div className="todo-list-wrapper">
            <div className="todo-list-form">
              <div className="form-wrapper">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <label className="form-label">Title</label>
                    <input
                      className="form-input"
                      type="text"
                      id="title"
                      name="title"
                      defaultValue={modalEvent.title}
                      onBlur={handleBlur}
                    />
                  </Row>
                  <Row>
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-input"
                      placeholder="Description"
                      id="description"
                      name="description"
                      defaultValue={modalEvent.description}
                      onBlur={handleBlur}
                    />
                  </Row>
                  <Row>
                    <Col>
                      <label className="form-label">Category</label>
                      <select
                        className="form-input"
                        type="text"
                        id="category"
                        name="category"
                        onClick={handleFormSelect}
                        defaultValue={modalEvent.category || "Home"}
                        onChange={handleFormSelect}
                      >
                        <option value="Home">Home</option>
                        <option value="Work"> Work</option>
                      </select>
                    </Col>
                    <Col>
                      <label className="form-label">Priority</label>
                      <select
                        className="form-input"
                        type="text"
                        id="priority"
                        name="priority"
                        defaultValue={modalEvent.priority}
                        onClick={handleFormSelect}
                        selected={modalEvent.priority || 1}
                        onChange={handleFormSelect}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </Col>
                    <Col>
                      <fieldset>
                        <label className="form-label">Every</label>
                        <select
                          className="form-input"
                          type="text"
                          id="every"
                          name="every"
                          defaultValue={modalEvent.every || "none"}
                          onChange={handleFormSelect}
                        >
                          <option value="none">none</option>
                          <option value="day">day</option>
                          <option value="week">week</option>
                          <option value="month">month</option>
                        </select>
                      </fieldset>
                    </Col>
                    <Col>
                      <fieldset>
                        <label className="form-label">Interval</label>
                        <select
                          className="form-input form-select-sm"
                          type="number"
                          id="interval"
                          disabled={modalEvent.every === "" || modalEvent.every === "none"}
                          name="interval"
                          defaultValue={modalEvent.interval || "0"}
                          onChange={handleFormSelect}
                        >
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="14">14</option>
                          <option value="30">30</option>
                        </select>
                      </fieldset>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <fieldset>
                        <label className="form-label">Start</label>
                        <DatePicker
                          className="form-input"
                          name='start'
                          id='start'
                          selected={modalEvent.start}
                          onChange={(date) => handleStartDate(date)}
                          timeInputLabel="Time:"
                          timeFormat="hh:mm"
                          dateFormat="MM/dd/yyyy h:mm aa"
                          showTimeSelect
                        />
                      </fieldset>
                    </Col>
                    <Col>
                      <fieldset>
                        <label className="form-label">End</label>
                        <DatePicker
                          className="form-input"
                          name='end'
                          id='end'
                          selected={modalEvent.end}
                          onChange={(date) => handleEndDate(date)}
                          timeInputLabel="Time:"
                          timeFormat="hh:mm"
                          dateFormat="MM/dd/yyyy h:mm aa"
                          showTimeSelect
                        />
                      </fieldset>
                    </Col>

                    <Col>
                      <label className="form-label">All Day</label>
                      <input
                        type="checkbox"
                        id="allDay"
                        name="allDay"
                        defaultChecked={modalEvent.allDay}
                        onChange={handleBlur}
                      ></input>
                    </Col>
                  </Row>
                  <Row>
                    {daysOfWeek.map((day, i) => (
                      <Col key={`${day}`} className="mt-3">
                        <Form.Check
                          className="form-label"
                          type="checkbox"
                          id={`${day}`}
                          disabled={modalEvent.every === "" || modalEvent.every === "none"}
                          label={`${day}`}
                          name={`${day}`}
                          defaultChecked={modalEvent[day]}
                          onChange={handleBlur}
                        />
                      </Col>
                    ))}
                  </Row>
                  <Row>
                  <Col>
                      <fieldset>
                        <label className="form-label">Until</label>
                        <DatePicker
                          className="form-input"
                          name='until'
                          id='until'
                          readOnly={modalEvent.every === "" || modalEvent.every === "none"}
                          selected={modalEvent.until}
                          onChange={(date) => handleUntilDate(date)}
                          timeInputLabel="Time:"
                          timeFormat="hh:mm"
                          dateFormat="MM/dd/yyyy h:mm aa"
                          showTimeSelect
                        />
                      </fieldset>
                    </Col>
                    <Col>
                    <fieldset>
                    <label className="form-label">eventId&nbsp;{modalEvent.id}</label>
                    <label className="form-label">occurrenceId&nbsp;{modalEvent.occurrenceId}</label>  
                    </fieldset>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Col>
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Col>
          <Col>
            <label className="form-label">Done</label>
            <input
              type="checkbox"
              id="done"
              name="done"
              defaultChecked={modalEvent.done}
              onChange={handleBlur}
            ></input>
          </Col>
          <Button onClick={toggleModal}>Cancel</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
