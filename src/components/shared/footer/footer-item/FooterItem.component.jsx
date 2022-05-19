import './footer-item.styles.scss';

const FooterItem = ({ title, links }) => {
    return (
        <div className="footer-item">
            <h3>{title}</h3>

            <ul className="footer-item-links">
                {links.map(({ id: linkID, link }) => (
                    <li key={linkID}>{link}</li>
                ))}
            </ul>
        </div>
    );
};

export default FooterItem;
