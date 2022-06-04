import css from './CardMini.module.scss'
import { Button } from '../UI/Button/Button'
import { useContext } from 'react'

export const CardMini = ({title, text, url, context}) => {

	const cardButton = useContext(context)

	return(
		<div className={css.CardMini}>
			<div className={css.CardMini_img}>
				<img src={require(`../../data/images/${url}.jpg`)} alt={url} />
			</div>
			<div className={css.CardMini_body}>
				<div className={css.body_title}>
					<p>{title}</p>
				</div>
				<div className={css.body_text}>
					<p>{text}</p>
				</div>
				<Button
					props = {cardButton}
				/>
			</div>
		</div>
	)
}