import React from "react";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import EventSearch from "@/components/events/EventSearch/event-search";
import EventList from "@/components/events/EventList/event-list";

const AllEventsPage = () => {
  const allEvents = getAllEvents();
  const router = useRouter();
  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={allEvents} />
    </>
  );
};

export default AllEventsPage;
