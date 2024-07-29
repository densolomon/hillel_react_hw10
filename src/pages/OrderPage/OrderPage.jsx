import OrderForm from '@/components/OrderForm/OrderForm'
import './orderPage.scss'

const OrderFormPage = () => {
	return (
		<>
			<h2 className="title order-title">Ready to order? Let`s go!</h2>
			<OrderForm />
		</>
	);
};

export default OrderFormPage;