import './footer.styles.scss';

import Searchbar from '../../searchbar/Searchbar.component';

import footerData from '../../../data/footer.data';

const Footer = () => {
    return (
        <footer className="main-footer">
            <section>
                <div className="titles-container">
                    <h1>10 Best New York car insurance</h1>

                    <h4>Find & compare your best rates in 2 minutes.</h4>
                </div>

                <Searchbar />
            </section>

            <section>
                {footerData.map(({ id, title, links }) => (
                    <div className="footer-item" key={id}>
                        <h3>{title}</h3>

                        <ul className="footer-item-links">
                            {links.map(({ id: linkID, link }) => (
                                <li key={linkID}>{link}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </footer>
    );
};

export default Footer;
