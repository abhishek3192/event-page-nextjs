import React from "react";
import EventItem from "../EventItem/event-item";
import classes from "./event-list.module.css";

const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((event) => {
        return <EventItem key={event.id} event={event} />;
      })}
    </ul>
  );
};

export default EventList;
