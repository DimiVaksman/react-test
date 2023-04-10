import css from './eventBoard.module.css'

export const EventBoard = ({events}) => {

    return <div className={css.eventBoard}>
    {events.map(event => <div key={event.name} >{event.name}</div>)}
    </div>
}