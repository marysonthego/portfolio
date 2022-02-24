import React, { useEffect, useState } from "react";
import axios from "axios";
import { TodosTable } from "components/todosforme/TodosTable";
import { RbC } from "components/todosforme/RbcCalendar";
import { RbCModal } from "components/todosforme/RbCModal";
import { CalcDates } from "components/todosforme/CalcDates";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const DataOwner = () => {

  const [show, setShow] = useState(false);

  const [events, setEvents] = useState([{}]);

  const [eventCurrent, setEventCurrent] = useState({});

  var eventOccurrences = [{}];

  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "",
      description: "",
      createdDate: "",
      category: "",
      priority: 0,
    },
  ]);

  console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);

  const eventCurrentSelect = (evt) => {
    setEventCurrent((prev) => ({
      ...prev,
      ...evt,
    }));
    toggleModal();
  };

  const toggleModal = () => {
    setShow(!show);
  };

  const eventsFetchAll = async () => {
    let localList = [];
    await axios
      .get(`/api/events/all`)
      .then((res) => {
        if(res.data.length > 0) {
        let result = res.data.map((obj) => ({
          id: obj.id,
          start: new Date(obj.start),
          end: new Date(obj.end),
          until: new Date(obj.until),
          occurrenceId: obj.occurrenceid,
          title: obj.title,
          description: obj.description,
          category: obj.category,
          priority: obj.priority,
          allDay: obj.allday,
          done: obj.done,
          interval: obj.interval,
          every: obj.every,
          Sun: obj.sun,
          Mon: obj.mon,
          Tue: obj.tue,
          Wed: obj.wed,
          Thu: obj.thu,
          Fri: obj.fri,
          Sat: obj.sat,
        }));
        console.log(`eventsFetchAll result:`,result);
        if(result.allDay === 1) {
          result.start.setHours(0, 0, 0, 0);
          result.end.setHours(0, 0, 0, 0);
          result.until.setHours(0, 0, 0, 0);
        }
        localList = [...result];
      }
      })
      .catch((error) => console.error(`eventsFetchAll error ${error}`));
    setEvents(localList);
  };

  const eventCreate = async (evt) => {
    try {
    await axios
      .post("/api/events/create", {
        start: new Date(evt.start),
        end: new Date(evt.end),
        until: new Date(evt.until),
        occurrenceId: evt.occurrenceId,
        title: evt.title,
        description: evt.description,
        category: evt.category,
        priority: evt.priority,
        allDay: evt.allDay,
        done: evt.done,
        interval: evt.interval,
        every: evt.every,
        Sun: evt.Sun,
        Mon: evt.Mon,
        Tue: evt.Tue,
        Wed: evt.Wed,
        Thu: evt.Thu,
        Fri: evt.Fri,
        Sat: evt.Sat,
      })
      .then((res) => {
        console.log(`eventCreate res.data: `, res.data);
        evt.id = res.data.insertId;
      })
    } catch(error) { console.error(`eventCreate error ${error}`)};
    if (evt.interval > 0 && evt.occurrenceId === 0) {
      eventOccurrencesCreate(evt);
    }
    eventsFetchAll();
  };

  const eventUpdate = async (evt) => {
    try {
    await axios
      .post("/api/events/update", {
        id: evt.id,
        start: evt.start,
        end: evt.end,
        until: evt.until,
        occurrenceId: evt.occurrenceId,
        title: evt.title,
        description: evt.description,
        category: evt.category,
        priority: evt.priority,
        allDay: evt.allDay,
        done: evt.done,
        interval: evt.interval,
        every: evt.every,
        Sun: evt.Sun,
        Mon: evt.Mon,
        Tue: evt.Tue,
        Wed: evt.Wed,
        Thu: evt.Thu,
        Fri: evt.Fri,
        Sat: evt.Sat,
      })
      .then((res) => {
        setEventCurrent((prev) => ({
          ...prev,
          ...res.data.changes,
        }));
        eventsFetchAll();
      })
    } catch(error) {console.error(`eventUpdate error ${error}`)};

    if (evt.interval > 0) {
      var occurrenceId;
      if (evt.occurrenceId === 0) {
        occurrenceId = evt.id;
      } else {
        occurrenceId = evt.occurrenceId;
      }
      eventOccurrencesFetch(evt);
    }
    eventsFetchAll();
  };

  const eventOccurrencesUpdate = async (evt) => {
    //eventOccurrencesFetch({occId: evt.occurrenceId});
    console.log(`eventOccurrences.length: `, eventOccurrences.length);
    for (let i = 0; i < eventOccurrences.length; i++) {
      console.log(`eventOccurrences: `, i, eventOccurrences[i]);
      try {
      await axios.post("/api/events/update", {
        id: eventOccurrences[i].id,
        start: eventOccurrences[i].start,
        end: eventOccurrences[i].end,
        until: eventOccurrences[i].until,
        occurrenceId: evt.occurrenceId,
        title: evt.title,
        description: evt.description,
        category: evt.category,
        priority: evt.priority,
        allDay: evt.allDay,
        done: eventOccurrences[i].done,
        interval: evt.interval,
        every: evt.every,
        Sun: evt.Sun,
        Mon: evt.Mon,
        Tue: evt.Tue,
        Wed: evt.Wed,
        Thu: evt.Thu,
        Fri: evt.Fri,
        Sat: evt.Sat,
      });
    } catch(error) {console.error(`eventOccurrencesUpdate error ${error}`)}
    }
    //eventsFetchAll();
  };

  const eventOccurrencesFetch = async (evt) => {
    let occurrenceId = evt.occurrenceId;
    try {
    await axios
      .post(`/api/events/recurring`, {
        occurrenceId: occurrenceId
      })
      .then((res) => {
        let results = res.data.map((obj) => ({
          id: obj.id,
          start: new Date(obj.start),
          end: new Date(obj.end),
          until: new Date(obj.until),
          occurrenceId: obj.occurrenceid,
          title: obj.title,
          description: obj.description,
          category: obj.category,
          priority: obj.priority,
          allDay: obj.allday,
          done: obj.done,
          interval: obj.interval,
          every: obj.every,
          Sun: obj.sun,
          Mon: obj.mon,
          Tue: obj.tue,
          Wed: obj.wed,
          Thu: obj.thu,
          Fri: obj.fri,
          Sat: obj.sat,
        }));
        eventOccurrences = [...results];
        console.log(`eventOccurrences: `, eventOccurrences);
        eventOccurrencesUpdate(evt);
      })
    } catch(error) { console.error(`eventOccurrencesFetch error ${error}`)};
  };

  const eventOccurrencesCreate = (evt) => {
    const dates = CalcDates({
      start: evt.start,
      until: evt.until,
      interval: evt.interval,
      every: evt.every,
      daysOfWeek: [
        evt.Sun,
        evt.Mon,
        evt.Tue,
        evt.Wed,
        evt.Thu,
        evt.Fri,
        evt.Sat,
      ],
    });
    if (Array.isArray(dates) && dates.length > 0) {
      for (let i = 0; i < dates.length; i++) {
        let date = new Date(dates[i]);
        if (date.getTime() <= evt.until.getTime()) {
          evt.start = new Date(date);
          evt.end = new Date(date);
          evt.occurrenceId = evt.id;
          eventCreate(evt);
        }
      }
    }
  };

  const eventDelete = async (id) => {
    await axios
      .post(`/api/events/delete`, { id: id })
      .then(() => {})
      .catch((error) =>
        console.error(`eventDelete error id: ${id} error: ${error}`)
      );
    eventOccurrencesDelete(id);
    eventsFetchAll();
  };

  const eventOccurrencesDelete = async (id) => {
    console.log(`id: `, id);
    await axios
      .post("/api/events/occurrencedelete", {
        id: id,
      })
      .then(() => {})
      .catch((error) => console.error(`eventOccurrencesDelete error ${error}`));
  };

  const todoMoveToCalendar = async (row) => {
    await axios
      .post(`/api/events/createfromtodo`, {
        start: new Date(),
        end: new Date(),
        until: new Date(),
        occurrenceId: '0',
        title: row.title,
        description: row.description,
        category: row.category,
        priority: row.priority,
        allDay: '1',
        done: '0',
        interval: '0',
        every: "",
        Sun: '0',
        Mon: '0',
        Tue: '0',
        Wed: '0',
        Thu: '0',
        Fri: '0',
        Sat: '0',
      })
      .then(() => {
        eventsFetchAll();
        todoDelete(row.id);
      })
      .catch((error) => console.error(`todoMoveToCalendar error ${error}`));
  };

  const todosFetchAll = async () => {
    let localTodos = [];
    await axios
      .get(`/api/todos/all`)
      .then((res) => {
        console.log(`todosFetchAll res.data: `, res.data);
        if(res.data.length > 0) {
          let result = res.data.map((obj) => ({
            id: obj.id,
            title: obj.title,
            description: obj.description,
            createdDate: obj.createdDate,
            category: obj.category,
            priority: obj.priority,
          }));
          localTodos = [...result];
          console.log(`result:`, result);
        }
      })
      .catch((error) => console.error(`todosFetchAll error ${error}`));
    setTodos(localTodos);
  };

  const todoCreate = async (todo) => {
    await axios
      .post(`/api/todos/create`, {
        title: todo.title,
        description: todo.description,
        category: todo.category,
        priority: todo.priority,
      })
      .then((res) => {
        todo.id = res.data.insertId;
        console.log(`todo.id: `, todo.id);
        todosFetchAll();
      })
      .catch((error) =>
        console.error(`todoCreate error ${todo.title} todo: ${error}`)
      );
  };

  const todoUpdate = async ({ rid, col, value }) => {
    await axios
      .put(`/api/todos/update`, {
        id: rid,
        column: [col],
        value: value,
      })
      .then((res) => {
        todosFetchAll();
      })
      .catch((error) => console.error(`todoUpdate error  ${error}`));
  };

  const todoDelete = async (id) => {
    console.log(`todoDelete id:`, id);
    await axios
      .post(`/api/todos/delete`, { id: id })
      .then((res) => {
        todosFetchAll();
      })
      .catch((error) =>
        console.error(`todoDelete error removing ${id} error: ${error}`)
      );
  };

  const todoSubmit = (formtodo) => {
    todoCreate(formtodo);
  };

  useEffect(() => {
    todosFetchAll();
    eventsFetchAll();
  }, []);

  return (
    <Container>
    <Row>
      <Col>
        <RbC
          events={events}
          eventCurrent={eventCurrent}
          eventCurrentSelect={eventCurrentSelect}
        />
      </Col>
      {show ? (
        <RbCModal
          show={show}
          eventCurrent={eventCurrent}
          toggleModal={toggleModal}
          eventCreate={eventCreate}
          eventUpdate={eventUpdate}
          eventDelete={eventDelete}
        />
      ) : null}
      </Row>
      <Row>
      <Col>
        <TodosTable
          todos={todos}
          todoDelete={todoDelete}
          todoUpdate={todoUpdate}
          todoMoveToCalendar={todoMoveToCalendar}
          todoSubmit={todoSubmit}
        />
      </Col>
    </Row>
    </Container>
  );
};
