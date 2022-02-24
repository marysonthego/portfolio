import React from 'react';
import Image from 'react-bootstrap/Image';

export const EventComponent = (event) => { 
  if (event.event.done) {
    return (
      <span color='#ffffff'><Image src='media/whitecheck16.png'/>{event.title}</span> 
    )
  } 
  return ( 
    <span color='#ffffff'> {event.title} </span> 
  ) 
};
