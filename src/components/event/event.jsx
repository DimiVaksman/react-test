import PropTypes from 'prop-types'
import { FaMapMarkerAlt,FaCalendarAlt,FaUserAlt, FaClock } from "react-icons/fa"
// import { formatEventStart } from "utils/formatEventStart";
// import { formatEventDuration } from "utils/formatEventDuration";

import {formatEventStart , formatEventDuration} from 'utils'
import { iconSize } from "contants";
import { Card, TitleCard, Info, Сhip } from "./event.styled";



export const Event = ({name, location, speaker, type, start, end}) => {
    const formattedStart = formatEventStart(start)
    const duration = formatEventDuration(start, end)
    return <Card>
    <TitleCard>{name}</TitleCard>
    <Info>
      <FaMapMarkerAlt size={iconSize.sm} />
      {location}
    </Info>
    <Info>
      <FaUserAlt size={iconSize.sm} />
      {speaker}
    </Info>
    <Info>
      <FaCalendarAlt size={iconSize.sm} />
      {formattedStart}
    </Info>
    <Info>
      <FaClock size={iconSize.sm} />
      {duration}
    </Info>
    <Сhip eventType={type}>{type}</Сhip>
  </Card>
}
// className={`${css.chip} ${css[type]}`}

Event.propTypes = {
 name: PropTypes.string.isRequired,
 location: PropTypes.string.isRequired,
 speaker: PropTypes.string.isRequired,
 type: PropTypes.string.isRequired,
 start: PropTypes.string.isRequired,
 end: PropTypes.string.isRequired,
};