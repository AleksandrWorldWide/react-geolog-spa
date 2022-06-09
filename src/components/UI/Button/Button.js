import { useContext } from 'react'
import css from './Button.module.scss'
import { Context } from '../../../Context'

export const Button = () => {

	const [button, theme] = useContext(Context)

console.log(Context)
	const cls = theme ? [css.Button, css.dark].join(' ') : [css.Button, css.light ].join(' ')

	return (
		<button className={cls}>
			{button}
		</button>
	)
}