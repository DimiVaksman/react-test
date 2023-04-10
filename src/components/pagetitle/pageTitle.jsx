import css from './pageTitle.module.css'

export const PageTitle = ({text}) => {
    return <h1 className={css.title}>{text}</h1>
}