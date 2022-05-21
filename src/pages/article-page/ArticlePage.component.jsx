import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './article-page.styles.scss';

import Loader from '../../components/shared/loader/Loader.component';

import articlesData from '../../data/articles.data';
import { LOADER_TIMEOUT } from '../../constants/constants';

const ArticlePage = () => {
    const navigate = useNavigate();
    const { articleID } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const article = articlesData.find(({ id }) => articleID === id);

        if (!article) {
            alert('Article not found');

            navigate('/');
        }

        setArticle(article);

        setTimeout(() => {
            setIsLoading(false);
        }, LOADER_TIMEOUT);
    }, []);

    return isLoading ? (
        <Loader />
    ) : (
        <main className="article-page">
            <h1>{article.title}</h1>

            <p>{article.description}</p>
        </main>
    );
};

export default ArticlePage;
