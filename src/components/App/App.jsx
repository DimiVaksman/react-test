import {PageTitle} from "components/pagetitle/pageTitle";
import {EventBoard} from "components/eventBoard/eventBoard";
import upcomingEvent from 'upcoming-events.json';
import { Container } from "./App.styled";

export const App = () => {
  return (
    <Container>
      <PageTitle text="24th Core Worlds"/>
      <EventBoard events={upcomingEvent} />
    </Container>
  );
};



 
   