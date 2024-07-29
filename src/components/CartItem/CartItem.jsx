import { useDispatch } from 'react-redux'
import Counter from '@/components/Counter/Counter'
import {
	decrement,
	increment,
	removeItem,
} from '@/redux/features/cart/cartSlice'
import './cartItem.scss'

const CartItem = ({ item }) => {
	const { name, id, amount, unitPrice } = item;
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(removeItem(id));
	};

	const handleIncrement = () => {
		dispatch(increment({ id }));
	};

	const handleDecrement = () => {
		if (amount > 1) {
			dispatch(decrement({ id }));
		}
	};

	return (
		<div className="cart-item-element">
			<h3>
				{amount}x{"  "}
				{name}
			</h3>
			<div className="cart-item-element-amount">
				<p>€{amount * unitPrice}.00</p>
				<Counter
					counter={amount}
					handleDelete={handleDelete}
					handleIncrement={handleIncrement}
					handleDecrement={handleDecrement}
				/>
			</div>
		</div>
	);
};

export default CartItem;
