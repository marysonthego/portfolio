import React, { useEffect, useState } from "react";
import axios from "axios";
import { TodosTable } from "components/todosforme/TodosTable";
import { RbC } from "components/todosforme/RbcCalendar";
import { RbCModal } from "components/todosforme/RbCModal";
import { CalcDates } from "components/todosforme/CalcDates";
import { WeatherCard } from "components/todosforme/WeatherCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "components/styles/scss/bootstrap.scss";
import "components/styles/formstyles.css";

export const DataOwner = () => {

  const [show, setShow] = useState(false);

  const [events, setEvents] = useState([{}]);

  const [eventCurrent, setEventCurrent] = useState({});

  var eventOccurrences = [{}];

  const [todos, setTodos] = useState([
    {
      id: 0,
      created_at: "",
      title: "",
      description: "",
      createdDate: "",
      category: "",
      priority: 0,
    },
  ]);

  const [lat, setLat] = useState([]);

  const [long, setLong] = useState([]);

  const [weatherData, setWeatherData] = useState([]);

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
        let result = res.data.map((obj) => ({
          id: obj.id,
          start: new Date(obj.start),
          end: new Date(obj.end),
          until: new Date(obj.until),
          occurrenceId: obj.occurrenceId,
          title: obj.title,
          description: obj.description,
          category: obj.category,
          priority: obj.priority,
          allDay: obj.allDay,
          done: obj.done,
          interval: obj.interval,
          every: obj.every,
          Sun: obj.Sun,
          Mon: obj.Mon,
          Tue: obj.Tue,
          Wed: obj.Wed,
          Thu: obj.Thu,
          Fri: obj.Fri,
          Sat: obj.Sat,
        }));
        localList = [...result];
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
        evt.id = res.data[0];
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
      .put("/api/events/update", {
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
      let occurrenceId;
      if (evt.occurrenceId === 0) {
        occurrenceId = evt.id;
      } else {
        occurrenceId = evt.occurrenceId;
      }
      eventOccurrencesFetch(evt);
      //eventOccurrencesUpdate(evt);
    //   for (let i = 0; i < events.length; i++) {
    //     if (events[i].occurrenceId === occurrenceId) {
    //       await axios
    //         .put("http://localhost:4001/events/update", {
    //           id: events[i].id,
    //           start: events[i].start,
    //           end: events[i].end,
    //           until: events[i].until,
    //           occurrenceId: events[i].occurrenceId,
    //           title: evt.title,
    //           description: evt.description,
    //           category: evt.category,
    //           priority: evt.priority,
    //           allDay: evt.allDay,
    //           done: evt.done,
    //           interval: evt.interval,
    //           every: evt.every,
    //           Sun: evt.Sun,
    //           Mon: evt.Mon,
    //           Tue: evt.Tue,
    //           Wed: evt.Wed,
    //           Thu: evt.Thu,
    //           Fri: evt.Fri,
    //           Sat: evt.Sat,
    //         })
    //         .then((res) => {
    //           setEventCurrent((prev) => ({
    //             ...prev,
    //             ...res.data.changes,
    //           }));
    //           //eventsFetchAll();
    //         })
    //         .catch((error) => console.error(`eventUpdate error ${error}`));

    //       //eventOccurrencesUpdate(evt);
    //     }
    //   }
    }
    eventsFetchAll();
  };

  const eventOccurrencesUpdate = async (evt) => {
    //eventOccurrencesFetch({occId: evt.occurrenceId});
    console.log(`eventOccurrences.length: `, eventOccurrences.length);
    for (let i = 0; i < eventOccurrences.length; i++) {
      console.log(`eventOccurrences: `, i, eventOccurrences[i]);
      try {
      await axios.put("/api/events/update", {
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
        occurrenceId,
        occurrenceId,
      })
      .then((res) => {
        let results = res.data.map((obj) => ({
          id: obj.id,
          start: new Date(obj.start),
          end: new Date(obj.end),
          until: new Date(obj.until),
          occurrenceId: obj.occurrenceId,
          title: obj.title,
          description: obj.description,
          category: obj.category,
          priority: obj.priority,
          allDay: obj.allDay,
          done: obj.done,
          interval: obj.interval,
          every: obj.every,
          Sun: obj.Sun,
          Mon: obj.Mon,
          Tue: obj.Tue,
          Wed: obj.Wed,
          Thu: obj.Thu,
          Fri: obj.Fri,
          Sat: obj.Sat,
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
      .put(`/api/events/delete`, { id: id })
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
      .put("/api/events/occurrencedelete", {
        id: id,
      })
      .then(() => {})
      .catch((error) => console.error(`eventOccurrencesDelete error ${error}`));
  };

  const todoMoveToCalendar = async (row) => {
    await axios
      .post(`/api/events/create`, {
        start: Date(),
        end: Date(),
        until: Date(),
        occurrenceId: 0,
        title: row.title,
        description: row.description,
        category: row.category,
        priority: row.priority,
        allDay: 1,
        done: 0,
        interval: 0,
        every: "",
        Sun: 0,
        Mon: 0,
        Tue: 0,
        Wed: 0,
        Thu: 0,
        Fri: 0,
        Sat: 0,
      })
      .then(() => {
        eventsFetchAll();
        todoDelete(row.id);
      })
      .catch((error) => console.error(`todoMoveToCalendar error ${error}`));
  };

  const todosFetchAll = async () => {
    setTodos([]);
    await axios
      .get(`/api/todos/all`)
      .then((res) => {
        setTodos((prev) => [...prev, ...res.data]);
      })
      .catch((error) => console.error(`todosFetchAll error ${error}`));
  };

  const todoCreate = async (todo) => {
    await axios
      .post(`/api/todos/create`, {
        title: todo.title,
        description: todo.description,
        createdDate: todo.createdDate,
        category: todo.category,
        priority: todo.priority,
      })
      .then((res) => {
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
        [col]: value,
      })
      .then((res) => {
        todosFetchAll();
      })
      .catch((error) => console.error(`todoUpdate error  ${error}`));
  };

  const todoDelete = async (id) => {
    await axios
      .put(`/api/todos/delete`, { id: id })
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

  useEffect(() => {
    const weatherFetch = async () => { 
       navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    // setLat(40.45454);
    // setLong(-105.08668);
    console.log(`lat`, lat);
    console.log(`long`, long);
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
    
      .then(function(response) { 
        if (!response.ok) {
          throw new Error("status " + response.status);
        }
        return  response.json();
      })
      .then(function (result) {
        setWeatherData(result);
        console.log(result);
        console.log(`inHg =`, result.current.pressure * 0.0295301);
      })
    } catch(Error){
        console.log(Error.name + ' : ' + Error.message);
      }
    };
    weatherFetch();
  },[lat,long]);

  return (
    <Row>
      <Col>
        <TodosTable
          todos={todos}
          todoDelete={todoDelete}
          todoUpdate={todoUpdate}
          todoMoveToCalendar={todoMoveToCalendar}
          todoSubmit={todoSubmit}
        />
        {(typeof weatherData.current !== 'undefined') ? (
          <WeatherCard weatherData={weatherData}/>
        ): (
          <div></div>
        )}
        
      </Col>
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
  );
};
