import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'

export default function Header() {
	let [cartOpen, setCartOpen] = useState(false)
	return (
		<header>
			<div>
				<span className='logo'>House Staff</span>
				<ul className='nav'>
					<li>О нас</li>
					<li>Контакты</li>
					<li>Кабинет</li>
				</ul>
				<FaShoppingCart
					onClick={() => setCartOpen((cartOpen = !cartOpen))}
					className={`shop-cart-button ${cartOpen && 'active'}`}
				/>
				{/* если cartOpen - true, то к классу добавиться класс active */}
			</div>
			<div className='presentation'></div>
		</header>
	)
}
