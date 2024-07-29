import MenuItem from '@/components/MenuList/MenuItem/MenuItem'
import './menuList.scss'

const MenuList = ({ pizzas }) => {
	return (
		<ul className="menu-list">
			{pizzas.map((pizza) => (
				<MenuItem key={pizza.id} pizza={pizza} />
			))}
		</ul>
	);
};

export default MenuList;