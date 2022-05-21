import { useContext } from 'react';
import './home-page.styles.scss';

import { ScreenSizeContext } from '../../contexts/ScreenSize.context';

import useLoader from '../../hooks/useLoader.hook';

import Loader from '../../components/shared/loader/Loader.component';
import TitlesSection from './titles-section/TitlesSection.component';
import Menu from '../../components/menu/Menu.component';
import ArticlesSection from './articles-section/ArticlesSection.component';

const Homepage = () => {
    const { isMobile } = useContext(ScreenSizeContext);

    const isLoading = useLoader();

    return isLoading ? (
        <Loader />
    ) : (
        <main className="home-page">
            {!isMobile && <TitlesSection />}

            <Menu />

            <ArticlesSection />
        </main>
    );
};

export default Homepage;
