import {PageTitle} from "components/pagetitle/pageTitle";
import {EventBoard} from "components/eventBoard/eventBoard";
import upcomingEvent from 'upcoming-events.json';

export const App = () => {
  return (
    <>
      <PageTitle text="24th Core Worlds"/>
      <EventBoard events={upcomingEvent} />
    </>
  );
};



 
   