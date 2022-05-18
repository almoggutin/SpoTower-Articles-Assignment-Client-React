import './home-page.styles.scss';

import useMobile from '../../hooks/useMobile.hooks';

import TitlesSection from './titles-section/TitlesSection.component';
import Menu from '../../components/menu/Menu.component';
import ArticlesSection from './articles-section/ArticlesSection.component';

const Homepage = () => {
    const isMobile = useMobile();

    return (
        <main className="home-page">
            {!isMobile && <TitlesSection />}

            <Menu />

            <ArticlesSection />
        </main>
    );
};

export default Homepage;
