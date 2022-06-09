import { Card } from "../Card/Card"
import { Row } from "../UI/Row/Row"
import { useStore } from "react-redux"
import css from './About.module.scss'


export const About = () => {

	const state = useStore().getState()

	const about = state.about
	const contacts = state.contacts

	return (
		<div className={css.About}>
			<Card
				header = {about.header}
				text = {about.text}
				reverse = {about.reverse}
				full = {about.full}
				url = {about.url}
				isButton = {about.isButton}
			/>
			<Row height={180}/>
			<Card
				header = {contacts.header}
				text = {contacts.text}
				reverse = {contacts.reverse}
				full = {contacts.full}
				url = {contacts.url}
				isButton = {contacts.isButton}
			/>
			
		</div>
	)
}