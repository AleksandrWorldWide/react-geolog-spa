import { useContext } from 'react'
import { buttonMain } from '../../../../Context'
import css from './Email.module.scss'


export const Email = () => {

	const contacts = useContext(buttonMain)

	const email = contacts.contacts.slice(1,2)


	return (
		<div className={css.Email}>

			{
				email.map((item, id) => {
					return (
						<li key={item+id}>
							<a href="#">{item}</a>
						</li>
					)
				})
			}

			
		</div>
	)
}