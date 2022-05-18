import './article.styles.scss';

const Article = ({ title, summary }) => {
    return (
        <div className="article-container">
            <h2>{title}</h2>

            <p>{summary}</p>

            <div className="read-more-btn">Read more &gt;</div>
        </div>
    );
};

export default Article;
