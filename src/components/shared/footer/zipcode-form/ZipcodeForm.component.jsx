import './zipcode-form.styles.scss';

import Button from '../../../button/Button.component';

const ZipcodeForm = () => {
    const handleSubmit = (event) => event.preventDefault();

    return (
        <form className="zipcode-form" onSubmit={handleSubmit}>
            <div className="input-container">
                <input type="text" placeholder="Enter zip code" />
            </div>

            <Button type="submit" className="zipcode-form-btn">
                Get Your Quote
            </Button>
        </form>
    );
};

export default ZipcodeForm;
