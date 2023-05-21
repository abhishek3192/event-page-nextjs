import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import NotFound from "@/404";
import EventSummary from "@/components/events/event-detail/event-detail/event-summary";
import EventLogistics from "@/components/events/event-detail/event-detail/event-logistics";
import EventContent from "@/components/events/event-detail/event-detail/event-content";
import ErrorAlert from "@/components/ui/ErrorAlert/error-alert";

const EventDetailPage = () => {
  const router = useRouter();

  const event = getEventById(router.query.eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <NotFound />
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
