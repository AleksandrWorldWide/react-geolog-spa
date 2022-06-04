import css from './Logo.module.scss'
import { buttonMain } from '../../../Context'
import { useContext } from 'react'

export const Logo = () => {

	const logo = useContext(buttonMain)

	return (
		<div className={css.Logo}>
			<p className={css.left}>{logo.logo_left}</p>
			<p className={css.right}>{logo.logo_right}</p>
		</div>
	)

}