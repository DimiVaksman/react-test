import PropTypes from 'prop-types'
import css from './event.module.css'
import { FaMapMarkerAlt,FaCalendarAlt,FaUserAlt, FaClock } from "react-icons/fa"
// import { formatEventStart } from "utils/formatEventStart";
// import { formatEventDuration } from "utils/formatEventDuration";

import {formatEventStart , formatEventDuration} from 'utils'
import { iconSize } from "contants";



export const Event = ({name, location, speaker, type, start, end}) => {
    const formattedStart = formatEventStart(start)
    const duration = formatEventDuration(start, end)
    return <div class={css.event}>
    <h2 className={css.title}>{name}</h2>
    <p className={css.info}>
      <FaMapMarkerAlt className={css.icon} size={iconSize.sm} />
      {location}
    </p>
    <p className={css.info}>
      <FaUserAlt className={css.icon} size={iconSize.sm} />
      {speaker}
    </p>
    <p className={css.info}>
      <FaCalendarAlt className={css.icon} size={iconSize.sm} />
      {formattedStart}
    </p>
    <p className={css.info}>
      <FaClock className={css.icon} size={iconSize.sm} />
      {duration}
    </p>
    <span className={`${css.chip} ${css[type]}`}>{type}</span>
  </div>
}


Event.propTypes = {
 name: PropTypes.string.isRequired,
 location: PropTypes.string.isRequired,
 speaker: PropTypes.string.isRequired,
 type: PropTypes.string.isRequired,
 start: PropTypes.string.isRequired,
 end: PropTypes.string.isRequired,
};