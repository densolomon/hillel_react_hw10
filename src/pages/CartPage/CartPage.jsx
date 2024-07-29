import { Link, useNavigate } from 'react-router-dom'
import Button from '@/components/Button/Button'
import {
	BACK_TO_MENU,
	CLEAR_CART,
	ORDER_PIZZAS,
} from '@/constants/buttonConstants'
import './cartPage.scss'
import { FaArrowLeft } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '@/components/CartItem/CartItem'
import { clearCart } from '@/redux/features/cart/cartSlice'

const CartPage = () => {
	const navigate = useNavigate();
	const handleBackToMenu = () => navigate(-1);

	const { amount, cartItems, total } = useSelector((store) => store.cart);
	const dispatch = useDispatch();

	return (
		<div className="cart">
			<Button
				className="back-btn"
				title={BACK_TO_MENU}
				handleClick={handleBackToMenu}
			>
				<FaArrowLeft />
			</Button>
			{!cartItems.length ? (
				<h2>Your Cart is empty...</h2>
			) : (
				<>
					<div className="cart-header-wrapper">
						<h2>Your Cart, {amount}</h2>
						{cartItems.map((item) => (
							<CartItem key={item.id} item={item}/>
						))}
					</div>
					<div className="cart-footer-wrapper">
						<div className="cart-footer-amount-wrapper">
							<h4>total €{total}.00</h4>
						</div>
						<div className="cart-footer-button-block">
							<Link to={'/order/new'}>
								<Button title={ORDER_PIZZAS}/>
							</Link>
							<Button
								className="clear-btn"
								title={CLEAR_CART}
								handleClick={() => dispatch(clearCart())}
							/>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default CartPage;
