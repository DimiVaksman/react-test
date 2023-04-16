import {PageTitle} from "components/pagetitle/pageTitle";
import {EventBoard} from "components/eventBoard/eventBoard";
import upcomingEvent from 'upcoming-events.json';
import { Container } from "./App.styled";
import { Counter } from "components/counter/counter";
import {Dropdown} from "components/dropdown/dropdown"
import {ColorPicker} from 'components/colorPicker/colorPicker'

export const App = () => {
  return (
    <Container>
      {/* <PageTitle text="24th Core Worlds"/> */}
      {/* <EventBoard events={upcomingEvent} /> */}
      {/* <Counter initialValue={0}/> */}
      {/* <Dropdown /> */}
      <ColorPicker />
    </Container>
  );
};



 
   