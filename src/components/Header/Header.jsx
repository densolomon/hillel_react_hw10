import { Link, useLocation } from 'react-router-dom'
import { useRef } from 'react'
import { useUser } from '@/contexts/UserContext'
import { TiShoppingCart } from 'react-icons/ti'
import Input from '@/components/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { setPizzaName } from '@/redux/features/products/productsSlice'

import './header.scss'

const Header = () => {
	const { userName } = useUser();
	const amount = useSelector((store) => store.cart.amount);
	const pizzaName = useSelector((store) => store.products.pizzaName);

	const dispatch = useDispatch();

	const location = useLocation();
	const isMenuPage = location.pathname === "/menu";
	const isLoginPage = location.pathname === "/";
	const isCartPage = location.pathname === "/cart";

	const formRef = useRef();

	const handleSubmitForm = (e) => {
		e.preventDefault();
	};

	const handleInputChange = (e) => {
		if (isLoginPage && e.target.value !== "") {
			alert("Please, login whith Your name to search for the order");
			formRef.current.reset();
		} else {
			dispatch(setPizzaName(e.target.value));
		}
	};

	return (
		<header className="header">
			<Link className="logo" to="/">
				Pizza Day
			</Link>
			<form onSubmit={handleSubmitForm} ref={formRef}>
				<Input
					handleType="text"
					handleChange={handleInputChange}
					handlePlaceholder="Search for the order #"
					value={pizzaName}
				/>
			</form>
			{userName !== "" && (isMenuPage || isCartPage) && (
				<div className="cart-box">
					<Link to={"cart"}>
						<TiShoppingCart />
					</Link>
					<p>{amount}</p>
					<h3>{userName}</h3>
				</div>
			)}
		</header>
	);
};

export default Header;