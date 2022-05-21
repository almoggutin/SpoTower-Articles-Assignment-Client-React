import { useEffect, useState } from 'react';
import './menu.styles.scss';

import MenuItem from './menu-item/MenuItem.component';

import MenuItemModel from '../../models/menu-item.model';
import articlesData from '../../data/articles.data';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const articleCategories = [...new Set(articlesData.map((article) => article.category))];

        const items = articleCategories.map((catrgory) => {
            const articles = articlesData.filter((article) => article.category === catrgory);

            return new MenuItemModel(catrgory, articles);
        });

        setMenuItems(items);
    }, []);

    return (
        <div className="menu-container">
            {menuItems.map(({ id, category, articles }) => (
                <MenuItem key={id} category={category} articles={articles} />
            ))}
        </div>
    );
};

export default Menu;
