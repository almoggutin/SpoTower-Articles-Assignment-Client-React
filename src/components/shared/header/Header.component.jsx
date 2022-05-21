import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

import { ScreenSizeContext } from '../../../contexts/ScreenSize.context';

import Searchbar from '../../searchbar/Searchbar.component';

const Header = () => {
    const { isMobile } = useContext(ScreenSizeContext);

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
