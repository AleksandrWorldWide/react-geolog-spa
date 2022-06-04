import css from './Header.module.scss'
import { Logo } from './Logo/Logo'
import { NavList } from './NavList/NavList'


export const Header = () => {

	return (
		<div className={css.Header}>
			<Logo/>
			<NavList/>
			
		</div>
	)
}