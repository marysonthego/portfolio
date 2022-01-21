import React from 'react';
import Image from 'react-bootstrap/Image';

export const EventComponent = (event) => { 
  if (event.event.done) {
    return (
      <span><Image src='whitecheck16.png'/>{event.title}</span> 
    )
  } 
  return ( 
    <span> {event.title} </span> 
  ) 
};
