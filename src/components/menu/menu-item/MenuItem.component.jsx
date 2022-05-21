import { useState } from 'react';
import { Link } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ category, articles }) => {
    const [showCategories, setShowCategories] = useState('');

    const handleClick = () => (showCategories === 'open' ? setShowCategories('') : setShowCategories('open'));

    return (
        <div className={`menu-item ${showCategories}`}>
            <div className="category-item" onClick={handleClick}>
                <h3>{category}</h3>

                <span className="arrow">&gt;</span>
            </div>

            <div className="category-links">
                {articles.map(({ id, title }) => (
                    <Link key={id} to={`/articles/${id}`}>
                        {title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MenuItem;
