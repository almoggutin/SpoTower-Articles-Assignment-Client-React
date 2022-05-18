import { v4 as uuidv4 } from 'uuid';

import FooterItem from '../models/footer-item.model';

const footerData = [
    new FooterItem('Services', [
        { id: uuidv4(), link: 'Auto insurance' },
        { id: uuidv4(), link: 'Car insurance' },
    ]),
    new FooterItem('Company', [
        { id: uuidv4(), link: 'How it works' },
        { id: uuidv4(), link: 'About us' },
        { id: uuidv4(), link: 'Sitemap' },
    ]),
    new FooterItem('Legal', [
        { id: uuidv4(), link: 'Privacy policy' },
        { id: uuidv4(), link: 'Terms of service' },
    ]),
];

export default footerData;
