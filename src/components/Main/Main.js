

import { Card } from '../Card/Card';
import { CardMini } from '../CardMini/CardMini';
import { Context } from '../../Context'
import { Row } from '../UI/Row/Row';
import css from './Main.module.scss'
import { useStore } from 'react-redux';





export const Main = () => {

	const state = useStore().getState()

	const mainState = state.mainState
	const info = state.info
	const mini = state.mini


	return (
		<main className={CSS.Main}>
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
		</main>
	)
}

