import { useEffect } from 'react'
import MenuList from '@/components/MenuList/MenuList'
import Loader from '@/components/Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import {
	filterPizzasList,
	getProductItems,
} from '@/redux/features/products/productsSlice'
import './menuPage.scss'


const MenuPage = () => {
	const { isLoading, error, pizzaName, filteredPizzasList } = useSelector(
		(store) => store.products
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductItems());
	}, [dispatch]);

	useEffect(() => {
		dispatch(filterPizzasList());
	}, [pizzaName, dispatch]);

	return (
		<>
			{isLoading && <Loader />}
			{error && <h3>Error: {error}</h3>}
			{filteredPizzasList.length ? <MenuList pizzas={filteredPizzasList} /> : null}
		</>
	);
};

export default MenuPage;