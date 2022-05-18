import { v4 as uuidv4 } from 'uuid';

class FooterItem {
    constructor(title, links) {
        this.id = uuidv4();
        this.title = title;
        this.links = links;
    }
}

export default FooterItem;
