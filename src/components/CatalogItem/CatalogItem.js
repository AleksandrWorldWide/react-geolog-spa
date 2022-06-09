import css from './CatalogItem.module.scss'
import { Recommended } from '../Recommended/Recommended'
import { Card } from '../Card/Card'
import { useStore } from 'react-redux'
import { Context } from '../../Context'
import { Row } from '../UI/Row/Row'

export const CatalogItem = () => {

	const state = useStore().getState().mainState[0]

	return (
		<div className={css.CatalogItem}>
			<Context.Provider value={[state.button, state.theme]}>
				<Card
					url={state.url}
					header = {state.title}
					subtitle = {state.subtitle}
					text = {state.fullText}
					features = {state.features}
					isButton = {state.isButton}
				/>
			</Context.Provider>
			<Row height={100}/>
			<Recommended/>
		</div>
	)
}