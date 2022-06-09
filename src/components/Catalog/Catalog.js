import css from './Catalog.module.scss'
import { Context } from '../../Context'
import { useStore } from 'react-redux'
import { Row } from '../UI/Row/Row'
import { CardMini } from '../CardMini/CardMini'

export const Catalog = () => {

	const state = useStore().getState()

	const mini = state.mini

	return (
		<div className={css.Catalog}>
			<Row height={107} text={'Каталог геологического оборудования'}/>
			<Row height={90}/>
			<div className={css.Catalog_mini}>
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