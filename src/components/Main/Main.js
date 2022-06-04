import { useState } from 'react';
import { Header } from '../Header/Header'
import { Card } from '../Card/Card';
import { CardMini } from '../CardMini/CardMini';
import { buttonMain } from '../../Context'
import { Row } from '../UI/Row/Row';
import css from './Main.module.scss'
import { Feedback } from '../Feedback/Feedback';
import { Footer } from '../Footer/Footer';




export const Main = () => {

	const [header] = useState({
		logo_left: 'Scientific',
		logo_right: 'Equipment',
		text: '©2022ScientificEquipment',
		show: true,
		company: [
			'Главная',
			'Оборудование',
			'О нас',
			'Политика конфиденциальности '
		],
		contacts: [
			'Контакты',
			'scienteq.pro@gmail.com',
			'Youtube'
		],
		lang: [
			'Ru ',
			'Eng',
			'Chi'
		]
	})

	const [mainState] = useState({
		header: 'Профессиональное геологическое оборудование',
		title: 'Переносной мотобур для отбора ориентированных образцов ПМБ-2б',
		text: 'Ручной мотобур ПМБ-2б предназначен для отбора геологических, геофизических, геохимических и прочих проб, в частности для отбора ориентированных палеомагнитных кернов стандартного диаметра.',
		reverse: false,
		url: 'motobur',
		features: [
			'Бензиновый двигатель 50 см3',
			'Вес ~5 кг',
			'Габариты 28 × 44 × 34 см.',
			'Система охлаждения водяная.',
		],
		button: 'Купить',
		theme: true
	})

	const [info] = useState({
		header: 'Чем мы занимаемся?',
		text: 'Компания Scientific Equipment занимается разработкой, проектированием и созданием механизмов различного назначения. Нашими основными направлениями деятельности являются работы в разработке высокотемпературного и вакуумного оборудования, а также механизированные системы с высокими требованиями к точности изготовления.',
		button: 'Узнать подробнее',
		theme: true,
		url: 'infoman',
		reverse: true
	})

	const [mini] = useState([{
		title: 'Бак переносной с ручным насосом',
		text: '10-литровый бак для воды с ручным насосом.',
		url: 'bak',
		button: 'Купить',
		theme: false
	},
	{
		title: 'Безрезьбовая буровая коронка с алмазным наконечником',
		text: 'Буровая коронка из высокопрочной, немагнитной нержавеющей стали',
		url: 'coronka',
		button: 'Купить',
		theme: false
	}
])

	const [feedback] = useState({
		title: 'Остались вопросы?',
		text: 'Закажите обратный звонок, с вами свяжется менеджер и всё объяснит',
		button: 'Заказать звонок',
		theme: true
	})

	return (
		<main className={CSS.Main}>
			<buttonMain.Provider value={header}>
				<Header/>
			</buttonMain.Provider>
			
			<Row height = {123}/>
			<buttonMain.Provider value={[mainState.button, mainState.theme]}>
				<Card 
					header = {mainState.header}
					title = {mainState.title}
					url = {mainState.url}
					text = {mainState.text}
					reverse = {mainState.reverse}
					features = {mainState.features}
					context = {buttonMain}
				/>
			</buttonMain.Provider>
			<Row height = {186}/>
			<buttonMain.Provider value={[info.button, info.theme]}>
				<Card 
					header = {info.header}
					url = {info.url}
					text = {info.text}
					reverse = {info.reverse}
					context = {buttonMain}
				/>
			</buttonMain.Provider>
			<Row height = {100}/>
			<Row height = {40} text = {'С этим товаром покупают :'}/>
			<Row height = {60}/>
			<div className={css.Main_mini}>
				{
					mini.map((item, id) => {

						return (
							<buttonMain.Provider value={[item.button, item.theme]}>
								<CardMini
									key={item+id}
									title={item.title}
									text={item.text}
									url={item.url}
									context={buttonMain}
								/>
							</buttonMain.Provider>
						)
					})
				}
			</div>
			<Row height={127}/>
			<buttonMain.Provider value={[feedback.button, feedback.theme]}>
				<Feedback
					title = {feedback.title}
					text = {feedback.text}
					context={buttonMain}
				/>
			</buttonMain.Provider>
			<Row height={124}/>
			<buttonMain.Provider value={header}>
				<Footer
					company = {header.company}
					contacts = {header.contacts}
					text = {header.text}
				/>
			</buttonMain.Provider>
			<Row height={40}/>
			
		</main>
	)
}