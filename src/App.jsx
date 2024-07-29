import { Route, Routes } from 'react-router-dom'
import Layout from '@/components/Layout/Layout'
import LoginPage from '@/pages/LoginPage/LoginPage'
import MenuPage from '@/pages/MenuPage/MenuPage'
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage'
import CartPage from '@/pages/CartPage/CartPage'
import OrderPage from '@/pages/OrderPage/OrderPage'

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route index element={<LoginPage/>}/>
					<Route path="/menu" element={<MenuPage/>}/>
					<Route path="/cart" element={<CartPage />} />
					<Route path="order/new" element={<OrderPage />} />
					<Route path="*" element={<NotFoundPage/>}/>
				</Route>
			</Routes>
		</>
	)
}

export default App
