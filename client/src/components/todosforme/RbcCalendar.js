import React, {useEffect, useState} from "react";
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import {EventComponent} from 'components/todosforme/EventComponent';
import Container from 'react-bootstrap/Container';

const localizer = momentLocalizer(moment);

export const RbC = ({
  events,
  eventCurrent,
  eventCurrentSelect,
}) => {
  const [, setSelect] = useState(false);
  const [calEvents, setCalEvents] = useState(events);
  let startTime = new Date();
  startTime.setHours(9, 0);

  let endTime = new Date();
  endTime.setHours(19, 0);

  useEffect(()=>{
    setCalEvents(events)},
    [events]);

  const handleSelectEvent = (ev) => {
    setSelect(true);
    eventCurrentSelect(ev);
    setSelect(false);
  };

  const handleSelectSlot = ({start, end}) => {
    let newEvent = {
      id: 0,
      start: new Date(start),
      end: new Date(end),
      occurrenceId: 0,
      until: new Date(end),
      title: '',
      description: '',
      createdDate: new Date(),
      category: '',
      priority: 0,
      allDay: 0,
      done: 0,
      interval: 0,
      every: '',
      Sun: 0,
      Mon: 0,
      Tue: 0,
      Wed: 0,
      Thu: 0,
      Fri: 0,
      Sat: 0,
    }
    eventCurrentSelect(newEvent);
  }
  
  return (
    <Container fluid className="rbc-calendar">
      <Calendar
        selectable
        selectedEvent={eventCurrent}
        startAccessor="start"
        endAccessor="end"
        min={startTime}
        max={endTime}
        localizer={localizer}
        events={calEvents}
        defaultDate={moment().toDate()}
        defaultView="month"
        onSelectSlot={handleSelectSlot}
        onSelectEvent={(e) => handleSelectEvent(e)}
        components = {{
          event: EventComponent
        }}
        eventPropGetter = {
          (event) => {
            let backgroundColor;
            if (event.category === "Work") {
                backgroundColor = '#ff8b00'  
            } else if (event.category === "Home") {
                backgroundColor = '#089b1bea'
              } else {
                backgroundColor = '#000000'
              }
            if (event.allDay === 0) {
              backgroundColor = '#df1357'
            }
            return {style: {backgroundColor}}
          }}
      />
    </Container>
  );
};
