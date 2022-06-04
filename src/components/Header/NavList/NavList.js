import css from './NavList.module.scss'
import { Email } from './Email/Email'
import { Language } from './Language/Language'
import { useContext } from 'react'
import { buttonMain } from '../../../Context'

export const NavList = () => {

	const company = useContext(buttonMain)

	const navList = company.company.slice(0,3)


	return (
		<div className={css.NavList}>
			<ul>
				{
					navList.map((item, id) => {
						return (
							<li key={item+id}>
								<a href="#">{item}</a>
							</li>
						)
					})
				}
			</ul>
			<Email/>
			<Language/>
		</div>
	)
}