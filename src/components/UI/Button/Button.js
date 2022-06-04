import css from './Button.module.scss'

export const Button = ({props}) => {

	const [button, theme] = props

	const cls = theme ? [css.Button, css.dark].join(' ') : [css.Button, css.light ].join(' ')

	return (
		<button className={cls}>
			{button}
		</button>
	)
}