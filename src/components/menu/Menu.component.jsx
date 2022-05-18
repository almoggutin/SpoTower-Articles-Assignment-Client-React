import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.styles.scss';

import articlesData from '../../data/articles.data';

const Menu = () => {
    const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //     const articleCategories = articlesData.map(())
    // }, []);

    return (
        <div className="menu-container">
            {/* {menuItems.map(({ id, category, links }) => (
                <div key={id} className="menu-item">
                    <div className="category-item">
                        <h1>{category}</h1>

                        <span>&gt;</span>
                    </div>
                </div>
            ))} */}
        </div>
    );
};

export default Menu;
