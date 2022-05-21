import { useContext } from 'react';
import './footer.styles.scss';

import { ScreenSizeContext } from '../../../contexts/ScreenSize.context';

import Searchbar from '../../searchbar/Searchbar.component';
import FooterItem from './footer-item/FooterItem.component';
import ZipcodeForm from './zipcode-form/ZipcodeForm.component';

import footerData from '../../../data/footer.data';

const Footer = () => {
    const { isMobile } = useContext(ScreenSizeContext);

    return (
        <footer className="main-footer">
            <section>
                <div className="titles-container">
                    <h1>10 Best New York car insurance</h1>

                    <h4>Find & compare your best rates in 2 minutes.</h4>
                </div>

                {isMobile ? <ZipcodeForm /> : <Searchbar />}
            </section>

            <section>
                {footerData.map(({ id, title, links }) => (
                    <FooterItem key={id} title={title} links={links} />
                ))}
            </section>
        </footer>
    );
};

export default Footer;
