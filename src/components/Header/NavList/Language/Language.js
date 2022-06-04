import css from './Language.module.scss'
import { buttonMain } from '../../../../Context'
import { useContext } from 'react'

export const Language = () => {

	const selector = useContext(buttonMain)

	const lang = selector.show ? selector.lang : new Array(selector.lang[0])
	const cls = selector.show ? [css.Language, css.arrowUp].join(' ') : [css.Language, css.arrowDown].join(' ')




	return (


			<div className={cls}>
				<ul>
					{
						lang.map((item, id) => {
							return (
								<li key={item+id}>
									<a href="">{item}</a>
								</li>
							)
							})
					}
				
				</ul>
					
			</div>

					

		
	)
}