
import { Header } from '../Header/Header'
import { Card } from '../Card/Card';
import { CardMini } from '../CardMini/CardMini';
import { Context } from '../../Context'
import { Row } from '../UI/Row/Row';
import css from './Main.module.scss'
import { Feedback } from '../Feedback/Feedback';
import { Footer } from '../Footer/Footer';
import { useStore } from 'react-redux';





const Main = () => {

	const state = useStore().getState()

	const header = state.header
	const mainState = state.mainState
	const info = state.info
	const mini = state.mini
	const feedback = state.feedback

	return (
		<main className={CSS.Main}>
			<Context.Provider value={header}>
				<Header/>
			</Context.Provider>
			
			<Row height = {123}/>
			<Context.Provider value={[mainState.button, mainState.theme]}>
				<Card 
					header = {mainState.header}
					title = {mainState.title}
					url = {mainState.url}
					text = {mainState.text}
					reverse = {mainState.reverse}
					features = {mainState.features}
					context = {Context}
				/>
			</Context.Provider>
			<Row height = {186}/>
			<Context.Provider value={[info.button, info.theme]}>
				<Card 
					header = {info.header}
					url = {info.url}
					text = {info.text}
					reverse = {info.reverse}
					context = {Context}
				/>
			</Context.Provider>
			<Row height = {100}/>
			<Row height = {40} text = {'С этим товаром покупают :'}/>
			<Row height = {60}/>
			<div className={css.Main_mini}>
				{
					mini.map((item, id) => {

						return (
							<Context.Provider value={[item.button, item.theme]}>
								<CardMini
									key={item+id}
									title={item.title}
									text={item.text}
									url={item.url}
									context={Context}
								/>
							</Context.Provider>
						)
					})
				}
			</div>
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
			
		</main>
	)
}

