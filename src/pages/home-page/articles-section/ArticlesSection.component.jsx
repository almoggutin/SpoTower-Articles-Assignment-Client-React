import './articles-section.styles.scss';

import articlesData from '../../../data/articles.data';
import Article from './article/Article.component';

const ArticlesSection = () => {
    return (
        <div className="articles-section">
            {articlesData.map(({ id, title, summary }) => (
                <Article key={id} title={title} summary={summary} />
            ))}
        </div>
    );
};

export default ArticlesSection;
