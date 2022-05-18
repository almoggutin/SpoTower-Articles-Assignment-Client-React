import { v4 as uuidv4 } from 'uuid';

class MenuItem {
    constructor(category, links) {
        this.id = uuidv4();

        this.category = category;
        this.links = links;
    }
}

export default MenuItem;
