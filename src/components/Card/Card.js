import css from './Card.module.scss'
import { Button } from '../UI/Button/Button'

export const Card = ({title, subtitle, header, text, reverse, features, url, full, isButton}) => {

	const content_direction = reverse ? css.dir_reverse : css.Card_content

	const sizeImage = full ? css.content_img__full : css.content_img__kurz

	return (
		<div className={css.Card}>
			
			<div className={content_direction}>
				{url && <div className={sizeImage}>
					<img src={require(`../../data/images/${url}.jpg`)} alt={url} />
				</div>}
				<div className={css.content_body}>
					{header && <h2 className={css.Card_title}>{header}</h2>}
					{title && <div className={css.body_title}>
						<p>{title}</p>
					</div>}
					{subtitle && <div className={css.body_subtitle}>
						<p>{subtitle}</p>
					</div>}
					{text && <div className={css.body_text}>
						<p>{text}</p>
					</div>}
					<div className={css.body_props}>
						{features && <ul>
							{
								features.map((item, id) => {
									return (
										<li key = {item + id}>
											{item}
										</li>
									)
								})
							}
						</ul>}
					</div>
					{isButton && <Button/>}
				</div>
			</div>
		</div>
	)
}