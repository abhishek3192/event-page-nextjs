import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "@/dummy-data";
import ErrorAlert from "@/components/ui/ErrorAlert/error-alert";
import Button from "@/components/ui/Button/button";
import ResultsTitle from "@/components/events/ResultTitle/results-title";
import EventList from "@/components/events/EventList/event-list";

const FilteredEventsPage = () => {
  const router = useRouter();

  const getYearMonth = router.query.slug;

  if (!getYearMonth) {
    return <p className="center">Loading...</p>;
  }

  const filterYear = getYearMonth[0];
  const filterMonth = getYearMonth[1];

  const numYear = +filterYear;
  const numMonth = +filterMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>No data found. Please adjust your filters</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  const filteredData = getFilteredEvents({ month: numMonth, year: numYear });
  if (!filteredData || filteredData.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No Event found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const eventsDate = new Date(numYear, numMonth - 1);
  console.log(filteredData);
  return (
    <>
      <ResultsTitle date={eventsDate} />
      <EventList items={filteredData} />
    </>
  );
};

export default FilteredEventsPage;
