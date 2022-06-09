

import { Card } from '../Card/Card';
import { Context } from '../../Context'
import { Row } from '../UI/Row/Row';
import css from './Main.module.scss'
import { useStore } from 'react-redux';
import { Recommended } from '../Recommended/Recommended'





export const Main = () => {

	const state = useStore().getState()

	const mainState = state.mainState[0]
	const info = state.info

	return (
		<main className={css.Main}>
			<Context.Provider value={[mainState.button, mainState.theme]}>
				<Card 
					header = {mainState.header}
					title = {mainState.title}
					url = {mainState.url}
					text = {mainState.text}
					reverse = {mainState.reverse}
					features = {mainState.features}
					full = {mainState.full}
					isButton = {mainState.isButton}
				/>
			</Context.Provider>
			<Row height = {186}/>
			<Context.Provider value={[info.button, info.theme]}>
				<Card 
					header = {info.header}
					url = {info.url}
					text = {info.text}
					reverse = {info.reverse}
					isButton = {info.isButton}
				/>
			</Context.Provider>
			<Row height = {100}/>
			<Recommended/>
		</main>
	)
}

