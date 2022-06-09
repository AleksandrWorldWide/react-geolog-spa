
import { Button } from '../UI/Button/Button'
import css from './Feedback.module.scss'

export const Feedback = ({title, text}) => {


	return (
		<div className={css.Feedback}>
			<div className={css.Feedback_info}>
				<div className={css.info_title}>
					<h2>{title}</h2>
				</div>
				<div className={css.info_text}>
					<p>{text}</p>
				</div>
			</div>
			<div className={css.Feedback_call}>
				<Button/>
			</div>
		</div>
	)
}