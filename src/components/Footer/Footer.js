import css from './Footer.module.scss'
import { Logo } from '../Header/Logo/Logo'

export const Footer = ({text, company, contacts}) => {

	const companyItems = company.slice(1)


	return (
		<div className={css.Footer}>
			<div className={css.Footer_main}>
				<div className={css.main_logo}>
					<Logo/>
				</div>
				<div className={css.main_body}>
					<ul className={css.body_company}>
						{
							companyItems.map((item, id) => {
								return (
									<li key={item+id}>
										<a href="#">{item}</a>
									</li>
								)
							})
						}
					</ul>
					<ul className={css.body_contacts}>
					{
							contacts.map((item, id) => {
								return (
									<li key={item+id}>
										<a href="#">{item}</a>
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
			<div className={css.Footer_sub}>
				<p>{text}</p>
			</div>
		</div>
	)
}