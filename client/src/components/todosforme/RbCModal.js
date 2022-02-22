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
  console.log(`RbCModal eventCurrent: `, eventCurrent);
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
    setModalEvent(prev => ({
      ...prev, until: until
    }))
  };

  const handleSubmit = () => {
    if (eventCurrent.id === 0) {
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
          <div className="list-wrapper-modal">
            <div className="list-form-modal">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <label className="form-label-modal">Title</label>
                    <input
                      className="form-input-modal"
                      placeholder="event title"
                      type="text"
                      id="title"
                      name="title"
                      defaultValue={modalEvent.title}
                      onBlur={handleBlur}
                    />
                  </Row>
                  <Row>
                    <label className="form-label-modal">Description</label>
                    <textarea
                      className="form-input-modal"
                      placeholder="Description"
                      id="description"
                      name="description"
                      defaultValue={modalEvent.description}
                      onBlur={handleBlur}
                    />
                  </Row>
                  <Row>
                    <Col>
                      <label className="form-label-modal">Category</label>
                      <select
                        className="form-input-modal"
                        type="text"
                        id="category"
                        name="category"
                        defaultValue={modalEvent.category}
                        onClick={handleFormSelect}
                      >
                        <option value="Home">Home</option>
                        <option value="Work"> Work</option>
                      </select>
                    </Col>
                    <Col>
                      <label className="form-label-modal">Priority</label>
                      <select
                        className="form-input-modal"
                        type="text"
                        id="priority"
                        name="priority"
                        defaultValue={modalEvent.priority}
                        onClick={handleFormSelect}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </Col>
                    <Col>
                      <fieldset>
                        <label className="form-label-modal">Repeating</label>
                        <select
                          className="form-input-modal"
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
                        <label className="form-label-modal">Every</label>
                        <select
                          className="form-input-modal form-select-sm"
                          type="number"
                          id="interval"
                          disabled={modalEvent.every === "" || modalEvent.every === "none"}
                          name="interval"
                          defaultValue={modalEvent.interval || 0}
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
                        <label className="form-label-modal">Start</label>
                        <DatePicker
                          className="form-input-modal"
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
                        <label className="form-label-modal">End</label>
                        <DatePicker
                          className="form-input-modal"
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
                      <label className="form-label-modal">All Day</label>
                      <input
                        type="checkbox"
                        id="allDay"
                        name="allDay"
                        defaultChecked={!!modalEvent.allDay}
                        onChange={handleBlur}
                      ></input>
                    </Col>
                  </Row>
                  <Row>
                    {daysOfWeek.map((day, i) => (
                      <Col key={`${day}`} className="mt-3">
                        <Form.Check
                          className="form-label-modal"
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
                        <label className="form-label-modal">Until</label>
                        <DatePicker
                          className="form-input-modal"
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
                    <label className="form-label-modal">eventId&nbsp;{modalEvent.id}</label>
                    <label className="form-label-modal">occurrenceId&nbsp;{modalEvent.occurrenceId}</label>  
                    </fieldset>
                    </Col>
                  </Row>
                </Form>
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
            <label className="form-label-modal">Done</label>
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
