import { Link } from 'react-router-dom';
import './header.styles.scss';

import useMobile from '../../../hooks/useMobile.hooks';

import Searchbar from '../../searchbar/Searchbar.component';

const Header = () => {
    const isMobile = useMobile();

    return (
        <header className="main-header">
            {!isMobile && (
                <>
                    <h1>
                        <Link to="/">Auto Insurance</Link>
                    </h1>

                    <Searchbar />
                </>
            )}

            {isMobile && (
                <button className="hamburger-btn">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
            )}
        </header>
    );
};

export default Header;
