import css from './Catalog.module.scss'
import { Context } from '../../Context'
import { Header } from '../Header/Header'
import { useStore } from 'react-redux'
import { Feedback } from '../Feedback/Feedback'
import { Footer } from '../Footer/Footer'
import { Row } from '../UI/Row/Row'

export const Catalog = () => {

	const state = useStore().getState()

	const header = state.header
	const feedback = state.feedback

	return (
		<div className={css.Catalog}>
			<Context.Provider value={header}>
				<Header/>
			</Context.Provider>
			<Row height={127}/>
			<Context.Provider value={[feedback.button, feedback.theme]}>
				<Feedback
					title = {feedback.title}
					text = {feedback.text}
					context={Context}
				/>
			</Context.Provider>
			<Row height={124}/>
			<Context.Provider value={header}>
				<Footer
					company = {header.company}
					contacts = {header.contacts}
					text = {header.text}
				/>
			</Context.Provider>
			<Row height={40}/>
		</div>
	)
}