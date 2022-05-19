import './searchbar.styles.scss';

import Button from '../button/Button.component';

const Searchbar = () => {
    return (
        <div className="searchbar-container">
            <div className="input-container">
                <input type="text" placeholder="Enter zip code" />
            </div>

            <Button className="searchbar-btn">Get Your Quotes</Button>
        </div>
    );
};

export default Searchbar;
