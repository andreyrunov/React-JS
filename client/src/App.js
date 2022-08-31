import React from 'react'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Header from './components/Header'
import Items from './components/Items'
import ShowFullItem from './components/ShowFullItem'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			orders: [],
			currentItems: [],
			items: [
				{
					id: 1,
					title: 'Стул серый',
					img: 'denys-striyeshyn-wJ7yGwz2-00-unsplash.jpg',
					desc:
						'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона',
					category: 'chairs',
					price: '49.90',
				},
				{
					id: 2,
					title: 'Стул серый',
					img: 'goashape-RvyJGaoaWrs-unsplash.jpg',
					desc:
						'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона',
					category: 'chairs',
					price: '49.90',
				},
				{
					id: 3,
					title: 'Стул серый',
					img: 'inside-weather-BayIzHKkjM4-unsplash.jpg',
					desc:
						'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона',
					category: 'tables',
					price: '49.90',
				},
				{
					id: 4,
					title: 'Стул серый',
					img: 'jean-philippe-delberghe-xrjusFfOksI-unsplash.jpg',
					desc:
						'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона',
					category: 'sofa',
					price: '49.90',
				},
				{
					id: 5,
					title: 'Стул серый',
					img: 'khloe-arledge-8Rz_RIyp5FM-unsplash.jpg',
					desc:
						'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона',
					category: 'light',
					price: '49.90',
				},
				{
					id: 6,
					title: 'Стул серый',
					img: 'maiar-shalaby-faJf1aDiezQ-unsplash.jpg',
					desc:
						'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона',
					category: 'light',
					price: '49.90',
				},
			],
			showFullItem: false,
		}
		this.state.currentItems = this.state.items
		this.addToOrder = this.addToOrder.bind(this) // за счет это строчки в методе addToOrder мы сможем взаимодействовать с состояниями (orders, items выше)
		this.deleteOrder = this.deleteOrder.bind(this)
		this.chooseCategory = this.chooseCategory.bind(this)
		this.onShowItem = this.onShowItem.bind(this)
	}

	render() {
		return (
			<div className='wrapper'>
				<Header orders={this.state.orders} onDelete={this.deleteOrder} />
				<Categories chooseCategory={this.chooseCategory} />
				<Items
					onShowItem={this.onShowItem}
					items={this.state.currentItems}
					onAdd={this.addToOrder}
				/>
				{this.state.showFullItem && <ShowFullItem />}
				<Footer />
			</div>
		)
	}

	onShowItem() {
		this.setState({showFullItem: !this.state.showFullItem})
	}

	chooseCategory(category) {
		if (category === 'all') {
			this.setState({currentItems: this.state.items})
			return
		}

		this.setState({
			currentItems: this.state.items.filter(el => el.category === category)
		})
		
	}

	deleteOrder(id) {
		this.setState({ orders: this.state.orders.filter(el => el.id !== id)})		
	}

	addToOrder(item) {
		let isInArray = false
		this.state.orders.forEach((el) => {
			if (el.id === item.id) isInArray = true
		})
		if (!isInArray) this.setState({ orders: [...this.state.orders, item] })
	}
}

export default App
