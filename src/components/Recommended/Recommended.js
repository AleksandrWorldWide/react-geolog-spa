import css from './Recommended.module.scss'
import { Row } from '../UI/Row/Row'
import { CardMini } from '../CardMini/CardMini'
import { useStore } from 'react-redux'
import { Context } from '../../Context'


export const Recommended = () => {

	const state = useStore().getState()

	const mini = state.mini.filter((item => item.recommend === true))

	return (
		<div className={css.Recommended}>
			<div className={css.header}>
				<Row height = {40} text = {'С этим товаром покупают :'}/>
				<Row height = {60}/>
			</div>
			<div className={css.body}>
			{
				mini.map((item, id) => {

					return (
						<Context.Provider value={[item.button, item.theme]}>
							<CardMini
								key={item+id}
								title={item.title}
								text={item.text}
								url={item.url}
								isButton = {item.isButton}
							/>
						</Context.Provider>
					)
				})
				}
			</div>
				
			</div>
	)
}