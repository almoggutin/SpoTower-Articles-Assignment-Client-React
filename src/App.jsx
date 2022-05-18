import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Header = lazy(() => import('./components/shared/header/Header.component'));
const Footer = lazy(() => import('./components/shared/footer/Footer.component'));
const HomePage = lazy(() => import('./pages/home-page/HomePage.component'));
const ArticlePage = lazy(() => import('./pages/article-page/ArticlePage.component'));

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div></div>}>
                <Header />

                <Routes>
                    <Route path="" element={<HomePage />} />
                    <Route path="article" element={<ArticlePage />} />
                </Routes>

                <Footer />
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
