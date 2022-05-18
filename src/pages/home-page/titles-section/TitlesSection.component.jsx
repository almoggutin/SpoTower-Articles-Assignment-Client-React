import './titles-section.styles.scss';

import Searchbar from '../../../components/searchbar/Searchbar.component';

const TitlesSection = () => {
    return (
        <section className="titles-section">
            <div className="titles-container">
                <h1>10 Best New York car insurance</h1>

                <h4>Find & compare your best rates in 2 minutes.</h4>
            </div>

            <Searchbar />
        </section>
    );
};

export default TitlesSection;
