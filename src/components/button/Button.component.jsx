import './button.styles.scss';

const Button = ({ type = 'button', className = '', children }) => {
    return (
        <button type={type} className={`custom-btn ${className}`}>
            {children}
        </button>
    );
};

export default Button;
