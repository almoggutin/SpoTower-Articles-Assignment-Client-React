import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ScreenSizeContextProvider from './contexts/ScreenSize.context';

import Loader from './components/shared/loader/Loader.component';

const Header = lazy(() => import('./components/shared/header/Header.component'));
const Footer = lazy(() => import('./components/shared/footer/Footer.component'));
const HomePage = lazy(() => import('./pages/home-page/HomePage.component'));
const ArticlePage = lazy(() => import('./pages/article-page/ArticlePage.component'));

const App = () => {
    return (
        <BrowserRouter>
            <ScreenSizeContextProvider>
                <Suspense fallback={<Loader />}>
                    <Header />

                    <Routes>
                        <Route path="" element={<HomePage />} />
                        <Route path="articles/:articleID" element={<ArticlePage />} />

                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>

                    <Footer />
                </Suspense>
            </ScreenSizeContextProvider>
        </BrowserRouter>
    );
};

export default App;
