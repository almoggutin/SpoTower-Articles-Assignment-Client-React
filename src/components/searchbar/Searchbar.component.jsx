import './searchbar.styles.scss';

const Searchbar = () => {
    return (
        <div className="searchbar-container">
            <div className="input-container">
                <input type="text" placeholder="Enter zip code" />

                <div></div>
            </div>

            <button type="button">Get Your Quotes</button>
        </div>
    );
};

export default Searchbar;
